import { Component, OnInit } from '@angular/core';
import { constant } from 'src/app/Constants/constant';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  from: string;

  constructor() {
    this.from = constant.location;
  }

  ngOnInit() {
    const target = document.querySelector('.twTest');
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: '#20c997',
      cursorColor: '#20c997',
      cursorClassName: 'cursor-span'
    });

    writer
      .type('Full Stack Web Developer')
      .rest(1200)
      .clear()
      .type('Angular & .Net Core Expert')
      .rest(1200)
      .clear()
      .type('Azure DevOps Practitioner')
      .rest(1200)
      .clear()
      .start();
  }
}
