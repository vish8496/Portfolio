import { AfterViewInit, ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { constant } from 'src/app/Constants/constant';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements AfterViewInit {
  name: string;
  email: string;
  age: string;
  from: string;
  summary: string;

  stats = [
    { label: 'Years Experience', target: 4, current: 0, suffix: '' },
    { label: 'Happy Clients',    target: 3, current: 0, suffix: '+' },
    { label: 'Projects Done',    target: 5, current: 0, suffix: '+' },
    { label: 'Get Awards',       target: 2, current: 0, suffix: ''  },
  ];

  constructor(private el: ElementRef, private cdr: ChangeDetectorRef) {
    this.name    = constant.fullName;
    this.age     = constant.getAge();
    this.email   = constant.personalEmail;
    this.from    = constant.location;
    this.summary = constant.summary;
 const startDate = new Date('2019-07-01');
const currentDate = new Date();
const totalMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12 
                  + (currentDate.getMonth() - startDate.getMonth());
                  const decimalYears = totalMonths / 12;
        this.stats[0].target = Number(decimalYears.toFixed(1));
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const statsRow = this.el.nativeElement.querySelector('.stats-row');
      if (!statsRow) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.animateCounters();
              observer.disconnect();
            }
          });
        },
        { threshold: 0.2 }
      );
      observer.observe(statsRow);
    }, 400);
  }

  private animateCounters() {
    const duration = 1800;
    const steps    = 60;
    this.stats.forEach(stat => {
      const increment = stat.target / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          stat.current = stat.target;
          clearInterval(interval);
        } else {
          stat.current = Math.floor(current);
        }
        this.cdr.markForCheck();
      }, duration / steps);
    });
  }
}
