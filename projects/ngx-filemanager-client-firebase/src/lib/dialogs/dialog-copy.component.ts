import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ResFile } from 'ngx-filemanager-core/public_api';
import { FormControl } from '@angular/forms';

export interface CopyDialogInterface {
  files: ResFile[];
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-filemanager-copy-dialog',
  template: `
    <div class="sans-serif">
      <h2>Copy Items</h2>
      <div>
        <h5>Selected Items</h5>
        <ol>
          <li *ngFor="let file of items">
            {{ file.name }}
          </li>
        </ol>
      </div>
      <mat-form-field>
        <input matInput [formControl]="folderName" (keyup.enter)="onSubmit()" />
      </mat-form-field>
      <btns-cancel-ok
        okIcon="content_copy"
        okLabel="Copy"
        (clickedCancel)="onCancel()"
        (clickedOk)="onSubmit()"
      >
      </btns-cancel-ok>
    </div>
  `,
  styleUrls: [
    '../shared-utility-styles.scss'
  ]
})
export class AppDialogCopyComponent {
  folderName = new FormControl('New folder');
  items: ResFile[];

  constructor(
    public dialogRef: MatDialogRef<AppDialogCopyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CopyDialogInterface
  ) {
    this.items = data.files;
  }

  onSubmit() {
    this.dialogRef.close(this.folderName.value);
  }
  onCancel() {
    this.dialogRef.close();
  }
}
