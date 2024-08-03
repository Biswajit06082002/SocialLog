import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicService } from './core/services/basic.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SocialLog';
  posts: any[] | undefined;

  constructor(private basicService: BasicService) {}

  ngOnInit() {
    this.basicService.getPosts().subscribe((data: any[]) => {
      console.log(data);
    });
  }
}
