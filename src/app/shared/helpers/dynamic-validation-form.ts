import {FormGroup} from '@angular/forms';

export function matchPassword(): (group: FormGroup) => (null | void) {
    return (group: FormGroup) => {
        const newPasswordControl = group.get('newPassword');
        const repeatNewPasswordControl = group.get('repeatNewPassword');

        if (newPasswordControl.value === repeatNewPasswordControl.value) {
            return null;
        }

        return repeatNewPasswordControl.setErrors({passwordNotEqual: true});
    };
}
