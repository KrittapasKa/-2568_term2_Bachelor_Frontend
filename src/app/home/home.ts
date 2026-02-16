import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    imports: [RouterLink],
    templateUrl: './home.html',
    styleUrl: './home.css'
})
export class Home {
    slides = [0, 1, 2];
    currentSlide = signal(0);

    nextSlide() {
        this.currentSlide.set((this.currentSlide() + 1) % this.slides.length);
    }

    prevSlide() {
        this.currentSlide.set((this.currentSlide() - 1 + this.slides.length) % this.slides.length);
    }

    goToSlide(index: number) {
        this.currentSlide.set(index);
    }
}
