import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-master-loa-modal',
  templateUrl: './master-loa-modal.component.html',
  styleUrls: ['./master-loa-modal.component.scss'],
})
export class MasterLoaModalComponent {
  @Input() cancelButtonLabel: string | undefined = 'Cancel';
  @Input() confirmButtonLabel: string | undefined = 'Confirm';
  @Input() title: string | undefined = 'How to Master the Law of Attraction';
  @Input() message: string | undefined;

  constructor(public activeModal: NgbActiveModal) {}

  realityPoints: string[] = [
    "Keep yourself in a high frequency based on love, joy, happiness, appreciation, gratitude, and abundance.",
    "Put thoughts into the universe within a universal detailed thought pattern in which we all mutually consistently focus upon 10 Points of Focused Reality.",
    "Utilizing your understanding of the Split Slit Experiment, go into a meditation based on a nonphysical reality using enhanced creative expression and from a bird's eye perspective see, observe, and know you are living your manifestations objective.",
    "Once the thought-generated hologram of the sought-after objective is established in the universe, it becomes an aspect of reality that interacts with the universal hologram to bring about the desired objective.",
    "Do this 'DAILY' and make it a way of life. Utilizing the 10 Points of Focused Reality, twice a day, when you wake in the morning and before you go to bed repeat the process."
  ];
}
