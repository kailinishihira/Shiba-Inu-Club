import { Component, Input, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [MemberService]
})
export class EditComponent implements OnInit {
  @Input() selectedMember;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  updateThisMember(memberToUpdate){
    this.memberService.updateMember(memberToUpdate);
  }

  deleteThisMember(memberToDelete){
    if(confirm("Are you sure you want to delete this member?")) {
      this.memberService.deleteMember(memberToDelete);
    }
  }
}
