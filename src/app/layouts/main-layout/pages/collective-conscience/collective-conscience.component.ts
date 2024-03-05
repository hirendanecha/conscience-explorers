import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MasterLoaModalComponent } from 'src/app/@shared/modals/master-loa-modal/master-loa-modal.component';
import { CustomerService } from 'src/app/@shared/services/customer.service';
import { ToastService } from 'src/app/@shared/services/toast.service';

@Component({
  selector: 'app-collective-conscience',
  templateUrl: './collective-conscience.component.html',
  styleUrls: ['./collective-conscience.component.scss'],
})
export class CollectiveConscienceComponent implements OnInit{
  @ViewChild('textarea') textareaRef: ElementRef;
  profileId: number
  constructor(
    private router: Router,
    private modalService: NgbModal,
    private customerService: CustomerService,
    private toastService: ToastService,
  ) {
    this.profileId = +localStorage.getItem('profileId');
  }
  ngOnInit(): void {
    this.getRealityList();
  }
  editMode: boolean = false;
  fieldDataValue: string = '';
  maxWordsLimit: { [key: string]: boolean } = {};

  healthPoints = [
    { label: '1', placeholder: 'All people are healthy, and the world is disease-free' },
    { label: '2', placeholder: 'All people have access to organic healthy food' },
    { label: '3', placeholder: 'People have joyful well-paid work and they are compensated for the individual value they create in the world. As a result of this joyful contribution through loving the world (partially as an expression of their work) we collectively create enough abundance that the following conditions can be experienced' },
    { label: '4', placeholder: 'All people live in abundance and have access to homes' },
    { label: '5', placeholder: 'Free energy technology is available to all' },
    { label: '6', placeholder: 'Free healthcare is available to all' },
    { label: '7', placeholder: 'We live free and have no authoritative government' },
    { label: '8', placeholder: 'Higher level knowledge is available to all' },
    { label: '9', placeholder: 'A unit of transaction is used for trade and transactions for goods and services to provide a record of transaction' },
    { label: '10', placeholder: 'We live in abundance in all aspects of life' }
  ];

  exisingReality: any = [];
  fields = [
    { rulesNo: 1 },
    { rulesNo: 2 },
    { rulesNo: 3 },
    { rulesNo: 4 },
    { rulesNo: 5 },
    { rulesNo: 6 },
    { rulesNo: 7 },
    { rulesNo: 8 },
    { rulesNo: 9 },
    { rulesNo: 10 },
  ];
  fieldData: any = {};

  openLofmodel(){
    const modalRef = this.modalService.open(MasterLoaModalComponent, {
      centered: true,
      size: 'lg'
    });
    modalRef.result.then((res) => {
      // console.log(res);
    })
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  wordLimit(value: string, fieldName: number) {
    const maxWords = 300;
    const words = value.trim().split(/\s+/).length;
    this.maxWordsLimit[fieldName] = words > maxWords;
  }

  calculateRows(text: string): number {
    if (!text) {
      return 1;
    }
    const textareaWidth = this.textareaRef.nativeElement.offsetWidth;
    const charPerLine = Math.floor(textareaWidth / 10);
    const lineCount = text.split('\n').length;
    // const charPerLine = 45;
    const charCount = text.length;
    const rowCount = Math.ceil(charCount / charPerLine);
    return Math.min(Math.max(lineCount, rowCount), 5);
  }
  // calculateRows(text: string): number {
  //   if (!text || text.trim() === '') {
  //     return 1;
  //   }
  //   // return text.split('\n').length;
  //   // const rowCount = Math.ceil(text.length / 50);
  //   const rowCount = text.split('\n').length;
  //   return Math.min(rowCount, 5);
  // }
  
  getRealityList(): void {
    this.customerService.getMyReality(this.profileId).subscribe({
      next: (res: any) => {
        this.exisingReality = res.data
        this.exisingReality.forEach(item => {
          this.fieldData[item.rulesNo] = item.rulesDescription;
        });
      },
      error: () => {
      },
    });
  }
  
  nextPageSearch() {
    const reality = Object.keys(this.fieldData).map((key) => {
      return {
        rulesNo: parseInt(key),
        rulesDescription: this.fieldData[key],
      };
    });
    const modifiedOutput = {
      profileId: this.profileId,
      reality: reality
    };
    this.customerService.addUserReality(modifiedOutput).subscribe({
      next: (res: any) => {
        if (res) {
          this.toastService.success('Changes Saved Successfully.');
          this.editMode = false
        }
      },
      error: (error) => {
        this.toastService.danger('Something went wrong please try again!');
        console.log(error);
      },
    });
  }
}
