import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-pass',
  templateUrl: './new-pass.component.html',
  styleUrl: './new-pass.component.scss'
})
export class NewPassComponent {
  isLoading: boolean = false;
  passwordForm: FormGroup = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  onSubmit() {
    if (this.passwordForm.invalid) {
      return;
    }
    
    if (this.passwordForm.value.password !== this.passwordForm.value.confirmPassword) {
      this.passwordForm.get('confirmPassword')?.setErrors({ mismatch: true });
      return;
    }
    
    this.isLoading = true;
    // Simulate API call
    setTimeout(() => {
      console.log('Password reset successful');
      this.isLoading = false;
    }, 1500);
  }
}
