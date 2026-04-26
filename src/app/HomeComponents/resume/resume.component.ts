import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { constant } from 'src/app/Constants/constant';
import { college } from 'src/app/Models/college';
import { experience } from 'src/app/Models/experience';
import { skills } from 'src/app/Models/skills';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements AfterViewInit {
  colleges: college[];
  experinces: experience[];
  skills: skills[];
  barsVisible = false;

  constructor(private el: ElementRef) {
    this.experinces = constant.experience;
    this.colleges   = constant.colleges;
    this.skills     = constant.skills;
  }

  ngAfterViewInit() {
    const skillsSection = this.el.nativeElement.querySelector('.skills-section');
    if (!skillsSection) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.barsVisible = true;
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(skillsSection);
  }
}
