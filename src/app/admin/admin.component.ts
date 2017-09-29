import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  submitForm(memberName: string, numberOfShibas: number, shibaName: string, shibaAge: string, aboutShiba: string) {
    var newMember: Member = new Member(memberName, numberOfShibas, shibaName, shibaAge, aboutShiba);
    this.memberService.addMember(newMember);
  }

}
