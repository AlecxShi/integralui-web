import { ComponentFactoryResolver, ElementRef, EventEmitter, QueryList, ViewContainerRef } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIBaseService, IntegralUIItem, IntegralUIObjectState } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
export declare class IntegralUITreeListItem extends IntegralUIItem {
    protected elemRef: ElementRef;
    protected commonService: IntegralUICommonService;
    protected baseService: IntegralUIBaseService;
    private templateData;
    protected parentCtrl: any;
    templateRef: any;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService, baseService?: IntegralUIBaseService);
    ngOnInit(): void;
}
export declare class IntegralUITreeList extends IntegralUIBaseComponent {
    protected dataService: IntegralUIDataService;
    protected elemRef: ElementRef;
    protected commonService: IntegralUICommonService;
    protected cmpResolver: ComponentFactoryResolver;
    protected baseService: IntegralUIBaseService;
    private animSpeed;
    protected itemList: Array<IntegralUITreeListItem>;
    private prevData;
    private itemData;
    private nextData;
    private hoverItem;
    private blockPos;
    private leftBlockPos;
    private rightBlockPos;
    private leftBlockWidth;
    private blockWidth;
    private rightBlockWidth;
    private leftBlockOpacity;
    private blockOpacity;
    private rightBlockOpacity;
    private elemSize;
    contentList: QueryList<IntegralUITreeListItem>;
    contentRef: ViewContainerRef;
    headerElem: ElementRef;
    leftBlockElem: ElementRef;
    blockElem: ElementRef;
    rightBlockElem: ElementRef;
    itemTemplate: any;
    private currentSelection;
    private headerItem;
    private headerText;
    private selList;
    private trialRef;
    items: Array<any>;
    title: string;
    selectedItem: any;
    afterSelect: EventEmitter<any>;
    beforeSelect: EventEmitter<any>;
    clear: EventEmitter<any>;
    itemAdding: EventEmitter<any>;
    itemAdded: EventEmitter<any>;
    itemRemoving: EventEmitter<any>;
    itemRemoved: EventEmitter<any>;
    selectionChanged: EventEmitter<any>;
    constructor(dataService: IntegralUIDataService, elemRef: ElementRef, commonService?: IntegralUICommonService, cmpResolver?: ComponentFactoryResolver, baseService?: IntegralUIBaseService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onItemMouseEnter(e: any, item: any): void;
    onItemMouseLeave(e: any, item: any): void;
    onItemMouseDown(e: any, item: any): void;
    onHeaderMouseDown(e: any): void;
    protected getItemState(item: any): IntegralUIObjectState;
}
