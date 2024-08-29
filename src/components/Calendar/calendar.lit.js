import { LitElement, html, css } from 'lit';
import formatarData from '../../utils/formatarData.js';

class CalendarElement extends LitElement {
    static properties = {
        selectedDate: { type: String },
        currentMonth: { type: Number },
        currentYear: { type: Number },
        days: { type: Array },
        isOpen: { type: Boolean },
        label: { type: String },
    };

    constructor() {
        super();
        const today = new Date();
        this.selectedDate = '';
        this.currentMonth = today.getMonth();
        this.currentYear = today.getFullYear();
        this.days = [];
        this.isOpen = false;
        this.populateDays();
    }

    static styles = css`
        .custom-select {
          position: relative;
          display: inline-block;
          min-width: 120px;
        }

        .custom-select.fulfilled {
            min-width: 200px;
        }
    
        .select-selected {
          position: relative;
          background: var(--background-color);
          border: 1px solid var(--background-color);
          padding: 10px;
          cursor: pointer;
          user-select: none;
          border-radius: 10px;
          color: var(--text-color);
        }
    
        .select-selected.fulfilled {
          background: var(--primary-color);
          border: 1px solid var(--surface-color);
          color: var(--surface-color);
        }

        .select-selected > p {
            margin: 0;
        }

        .select-selected > .icon {
            position: absolute;
            top: 25%;
            right: 0;
        }

        .icon > svg {
            fill: var(--text-color);
        }

        .icon.fulfilled > svg {
            fill: var(--surface-color);
        }
    
        .calendar {
          display: none;
          position: absolute;
          background-color: var(--surface-color);
          border: 1px solid var(--surface-color);
          z-index: 99;
          margin: 0;
          padding: 10px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
        }
    
        .calendar.open {
          display: block;
        }
    
        .calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
    
        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 5px;
        }
    
        .calendar-day {
          padding: 10px;
          cursor: pointer;
          text-align: center;
          border-radius: 5px;
        }
    
        .calendar-day:hover {
          background-color: #ddd;
        }
    
        .calendar-day.selected {
          background-color: var(--primary-color);
          color: var(--surface-color);
        }

        button {
            background: transparent;
            border: none;
            padding: 10px;
            color: var(--text-color);
            border-radius: 10px;
            cursor: pointer;
        }
      `;

    toggleCalendar() {
        this.isOpen = !this.isOpen;
        this.requestUpdate();
    }

    populateDays() {
        const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        this.days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    }

    selectDate(day) {
        const month = this.currentMonth + 1 < 10 ? `0${this.currentMonth + 1}` : this.currentMonth + 1;
        const dayFormatted = day < 10 ? `0${day}` : day;
        this.selectedDate = `${this.currentYear}-${month}-${dayFormatted}`;
        this.isOpen = false;
        this.requestUpdate();
    }

    changeMonth(direction) {
        this.currentMonth += direction;
        if (this.currentMonth > 11) {
            this.currentMonth = 0;
            this.currentYear++;
        } else if (this.currentMonth < 0) {
            this.currentMonth = 11;
            this.currentYear--;
        }
        this.populateDays();
    }

    render() {
        return html`
          <div class="custom-select ${this.selectedDate ? "fulfilled" : ""}">
            <div
              class="select-selected ${this.selectedDate ? "fulfilled" : ""}"
              @click="${this.toggleCalendar}"
            >
              <p>
                ${this.selectedDate
                  ? `${this.label}: ${formatarData(this.selectedDate)}`
                  : this.label}
              </p>
              <div class="icon ${this.selectedDate ? "fulfilled" : ""}">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </div>
            </div>
            <div class="calendar ${this.isOpen ? "open" : ""}">
              <div class="calendar-header">
                <button @click="${() => this.changeMonth(-1)}">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M14 7l-5 5 5 5V7z" />
                  </svg>
                </button>
                <span>${this.currentMonth + 1 < 10 ? `0${this.currentMonth + 1}` : this.currentMonth + 1}/${this.currentYear}</span>
                <button @click="${() => this.changeMonth(1)}">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M10 17l5-5-5-5v10z" />
                  </svg>
                </button>
              </div>
              <div class="calendar-grid">
                ${this.days.map(
                  (day) => html` <div
                    class="calendar-day ${this.selectedDate ===
                    `${this.currentYear}-${(this.currentMonth + 1)
                      .toString()
                      .padStart(2, "0")}-${day.toString().padStart(2, "0")}`
                      ? "selected"
                      : ""}"
                    @click="${() => this.selectDate(day)}"
                  >
                    ${day}
                  </div>`
                )}
              </div>
            </div>
          </div>
        `;
    }
}


export default CalendarElement;
