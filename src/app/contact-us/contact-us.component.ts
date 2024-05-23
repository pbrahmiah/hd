import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  
public items=[
  { id:1,img:"https://images-cdn.ubuy.co.in/65a3293fe65a2e2caf3e74ed-yamaha-psr-a5000-61-key-world-music.jpg" },
  { id:2,img:"https://images-cdn.ubuy.co.in/65d873c380538369bf50e28d-yamaha-yas62iii-professional-alto.jpg" },
  { id:3, img:"data:image/jpeg;base64,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" },
]
}
