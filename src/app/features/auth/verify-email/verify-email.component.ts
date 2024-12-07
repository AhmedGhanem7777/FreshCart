import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrl: './verify-email.component.scss'
})
export class VerifyEmailComponent implements OnDestroy{

  resetCode: string = '';
  isShaking: boolean = false;
  timeLeft: number = 0;
  resendTimer: any;

  onSubmit() {
    if (!this.resetCode || this.resetCode.length !== 6) {
      this.isShaking = true;
      setTimeout(() => this.isShaking = false, 2000);
      return;
    }
    console.log('Verification code submitted:', this.resetCode);
  }

  resendCode() {
    if (this.timeLeft > 0) return;
    
    console.log('Resending verification code...');
    this.timeLeft = 30;
    this.startResendTimer();
  }

  startResendTimer() {
    this.resendTimer = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.resendTimer);
      }
    }, 1000);
  }

  ngOnDestroy() {
    if (this.resendTimer) {
      clearInterval(this.resendTimer);
    }
  }
}
