import { FormGroup, FormBuilder } from '@angular/forms';
import { Iwe7CoreControlValueAccessor } from 'iwe7-core';

import { Component, OnInit, Input, Injector } from '@angular/core';
const DEFAULT_FORMAT = {
    year: 'YYYY',
    month: 'M',
    date: 'D',
    hour: 'hh',
    minute: 'mm',
    second: 'ss'
};
import * as _ from 'lodash';

@Component({
    selector: 'picker-date',
    templateUrl: 'picker-date.html'
})
export class PickerDateComponent extends Iwe7CoreControlValueAccessor {

    @Input() count: number = 3;
    now: Date = new Date();
    cascadeData_: any[] = [];
    months: any[] = [];
    days: any[] = [];
    form: FormGroup;
    constructor(injector: Injector, fb: FormBuilder) {
        super(injector);
        this.form = fb.group({
            year: [''],
            month: [''],
            day: ['']
        });
        this.cascadeData_ = this.getYears();
        this.form.get('year').valueChanges.subscribe(res => {
            this.months = res.children;
            this.form.get('month').setValue(this.months[0]);
        });
        this.form.get('month').valueChanges.subscribe(res => {
            this.days = res.children;
        });
        this.form.get('year').setValue(this.cascadeData_[0]);

        this.form.valueChanges.subscribe(res => {
            this._onChange(res);
        });
    }

    getYears() {
        const year = this.now.getFullYear();
        const years = [];
        for (let i = 0; i < this.count; i++) {
            years.push({
                value: year + i,
                text: year + i + '年',
                children: this.getMonths()
            });
        }
        return years;
    }

    getMonths() {
        let months = [];
        for (let i = 1; i <= 12; i++) {
            months.push({
                value: i,
                text: i + '月',
                children: this.getDays()
            });
        }
        return months;
    }

    getDays() {
        let days = [];
        for (let i = 1; i < 31; i++) {
            days.push({
                value: i,
                text: i + '日'
            });
        }
        return days;
    }

    formatDate() {
    }
}
