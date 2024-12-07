import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrl: './forgot-pass.component.scss'
})
export class ForgotPassComponent {
  isLoading: boolean = false;
  forgotForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  onSubmit() {
    if (this.forgotForm.invalid) {
      return;
    }
    
    this.isLoading = true;
    // Simulate API call
    setTimeout(() => {
      console.log('Password reset email sent to:', this.forgotForm.value.email);
      this.isLoading = false;
    }, 1500);
  }
}
