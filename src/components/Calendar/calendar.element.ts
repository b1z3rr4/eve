import { CSSResultGroup, LitElement, TemplateResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { formateDate } from '../../utils/formatDate';
import { capitalize } from '../../utils/capitalize';

@customElement("eve-calendar")
export class CalendarElement extends LitElement {
    constructor() {
        super();
        const today = new Date();
        this.currentMonth = today.getMonth();
        this.currentYear = today.getFullYear();
        this.months = [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro",
        ];

        this.yearsOptions();
        this.populateDays();
    }

    static styles: CSSResultGroup = css`
    .custom-select {
      font-family: var(--roboto-font);
    }
  
    .select-selected {
      padding: 10px;
      cursor: pointer;
      user-select: none;
      position: relative;
      white-space: nowrap;
      border-radius: 10px;
      color: var(--text-color);
      border: 1px solid var(--background-color);
      background: var(--background-color);
    }

    .select-selected.fulfilled {
      color: var(--surface-color);
      background: var(--primary-color);
      border: 1px solid var(--surface-color);
    }

    .select-selected > p {
      margin: 0;
      margin-right: 20px;
    }

    .select-selected > .icon {
      top: 25%;
      right: 0;
      position: absolute;
    }

    .icon > svg {
      fill: var(--text-color);
    }

    .icon.fulfilled > svg {
      fill: var(--surface-color);
    }

    .calendar {
      margin: 0;
      z-index: 99;
      padding: 10px;
      display: none;
      position: absolute;
      border-radius: 10px;
      background-color: var(--surface-color);
      border: 1px solid var(--surface-color);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
    }

    .calendar.open {
      display: block;
    }

    .calendar-header {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      justify-content: space-between;
    }

    .calendar-grid {
      gap: 5px;
      display: grid;
      grid-template-columns: repeat(7, 1fr);
    }

    .calendar-day {
      padding: 10px;
      cursor: pointer;
      text-align: center;
      border-radius: 5px;
    }

    .calendar-day-off {
      padding: 10px;
      cursor: pointer;
      text-align: center;
      border-radius: 5px;
    }

    .calendar-day:hover {
      background-color: #ddd;
    }

    .calendar-day.selected {
      color: var(--surface-color);
      background-color: var(--primary-color);
    }

    button {
      border: none;
      padding: 10px;
      cursor: pointer;
      border-radius: 10px;
      background: transparent;
      color: var(--text-color);
    }
  `;

    @property()
    label: string = "";
    currentYear: number = 0;
    isOpen: boolean = false;
    currentMonth: number = 0;
    days: Array<number> = [];
    selectedDate: string = "";
    months: Array<string> = [];
    dayOfWeekForFirstDate: number = 0;
    skipNumberOfDays: Array<number> = [];
    arrayOfYearsOptions: Array<number> = [];

    toggleCalendar() {
        this.isOpen = !this.isOpen;
        this.yearsOptions();
        this.requestUpdate();
    }

    populateDays() {
        const daysInMonth = new Date(
            this.currentYear,
            this.currentMonth + 1,
            0
        ).getDate();
        this.days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
        const firstDate = new Date(
            this.currentYear,
            this.currentMonth,
            1,
            0
        ).getDay();
        this.skipNumberOfDays =
            firstDate === 0 ? [] : Array.from({ length: firstDate });
    }

    selectDate(day: number) {
        const month =
            this.currentMonth + 1 < 10
                ? `0${this.currentMonth + 1}`
                : this.currentMonth + 1;
        const dayFormatted = day < 10 ? `0${day}` : day;
        this.selectedDate = `${this.currentYear}-${month}-${dayFormatted}`;
        this.isOpen = false;
        this.requestUpdate();
    }

    changeMonth(direction: number) {
        this.currentMonth += direction;
        if (this.currentMonth > 11) {
            this.currentMonth = 0;
            this.currentYear++;
        } else if (this.currentMonth < 0) {
            this.currentMonth = 11;
            this.currentYear--;
        }
        this.yearsOptions();
        this.populateDays();
    }

    yearsOptions() {
        const firstYear = 1900;
        const lastYear = new Date().getFullYear() + 100;

        const arrayOfYearsOptions = Array.from(
            { length: lastYear - firstYear },
            (_, i) => i + firstYear
        );

        this.arrayOfYearsOptions = arrayOfYearsOptions;
    }

    render(): TemplateResult<1> {
        return html`
      <div class="custom-select ${this.selectedDate ? "fulfilled" : ""}">
        <div
          class="select-selected ${this.selectedDate ? "fulfilled" : ""}"
          @click="${this.toggleCalendar}"
        >
          <p>
            ${this.selectedDate
                ? `${this.label}: ${formateDate(this.selectedDate)}`
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
            <span>
              ${capitalize(
                    new Date(this.currentYear, this.currentMonth, 1)
                        .toLocaleString([], {
                            month: "long",
                        })
                        .toString()
                )}
              ${this.currentYear}
            </span>
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
            <span>Dom</span>
            <span>Seg</span>
            <span>Ter</span>
            <span>Qua</span>
            <span>Qui</span>
            <span>Sex</span>
            <span>Sab</span>
          </div>
          <div class="calendar-grid">
            ${this.skipNumberOfDays.map(
                    () => html` <div class="calendar-day-off"></div> `
                )}
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