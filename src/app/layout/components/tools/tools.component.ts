import {
    Component,
    OnInit,
} from '@angular/core';
import { ToolService } from '../../../services/tool.service';
import { ToolDefinition } from '../../../models/ToolDefinition';
import { Observable } from 'rxjs/Observable';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Keccak256Dialog } from '../../../shared/modules/tools/keccak256/keccak256.component';
import { ItemDialog } from '../../../shared/modules/tools/item-dialog/item-dialog.component';
import { BroadcastTransactionDialog } from '../../../shared/modules/tools/broadcastTransaction/broadcastTransaction.component';
import { DecodeTransactionDialog } from '../../../shared/modules/tools/decodeTransaction/decodeTransaction.component';

@Component({
    selector: 'tools',
    templateUrl: './tools.component.html',
    styleUrls: ['./tools.component.scss'],
    providers: [MatSnackBar]
})
export class ToolsComponent implements OnInit {
    items: Observable<ToolDefinition[]>;
    durationInSeconds = 3;


    getTools(): ToolDefinition[] {
        let items = [];
        this.items.subscribe(
            (data: ToolDefinition[]) => {
                items = data;
            });
        return items;
    }

    getHeight(): number {
        return 2;
    }

    openTool(item: ToolDefinition): void {
        let dialogType: any = ItemDialog;
        if (item.name === "keccak256") {
            dialogType = Keccak256Dialog;
        } else if (item.name === "broadcast transaction") {
            dialogType = BroadcastTransactionDialog;
        } else if (item.name === "decode transaction") {
            dialogType = DecodeTransactionDialog;
        }
        const dialogRef = this.dialog.open(dialogType, {
            width: '80%',
            height: '80%',
            data: { item },
            autoFocus: false,
        });

            
        // dialogRef.afterClosed().subscribe(result => {
        //     if (result && result === "add") {
        //         this.addCartItem(item);
        //     }
        // });
    }
    
    constructor(
        private toolService: ToolService,
        public dialog: MatDialog,
    ) { }

    ngOnInit() { 
        this.items = this.toolService.items;
    }
}
