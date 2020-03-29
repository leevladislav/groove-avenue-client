import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[numbersOnly]'
})
export class NumberOnlyDirective {
    @Input() dot: boolean;
    private regex: RegExp = new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g);
    private onlyNumRegex: RegExp = new RegExp('^[0-9]+$');
    // Allow key codes for special events. Reflect :
    // Backspace, tab, end, home
    private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'ArrowTop', 'ArrowDown', 'Enter', 'Delete'];

    constructor(private el: ElementRef) {
    }

    @HostListener('keydown', ['$event'])
    onKeyDown(event: KeyboardEvent) {
        // Allow Backspace, tab, end, and home keys

        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }

        let current: string = this.el.nativeElement.value;
        let next: string = current.concat(event.key);

        const reg = this.dot ? this.regex : this.onlyNumRegex;

        if (next && !String(next).match(reg)) {
            event.preventDefault();
        }
    }
}
