import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ToolDefinition } from '../models/ToolDefinition';
import availableTools from '../shared/util/available-tools';
import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { Observable } from 'rxjs/Observable';

@Injectable() 
export class ToolService implements DataSource<ToolDefinition> {

  private _items: BehaviorSubject<ToolDefinition[]>;
  private _categories: BehaviorSubject<Set<string>>; 
  private dataStore: {
    items: ToolDefinition[],
    categories: Set<string>,
  };
    
  // Using Angular DI we use the HTTP service
  constructor() {
    this.dataStore = { 
      items: [],
      categories: new Set(),
    };
    this._items = <BehaviorSubject<ToolDefinition[]>>new BehaviorSubject([]);
    this._categories = <BehaviorSubject<Set<string>>>new BehaviorSubject(new Set());
  }


  connect(collectionViewer: CollectionViewer): Observable<ToolDefinition[]> {
    return this._items.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
      this._items.complete();
  }

  public get items() {
    return this._items.asObservable();
  }

  public get categories() {
    return this._categories.asObservable();
  }


  load(query?: string, category?: string): void {
    const newItems: ToolDefinition[] = [];
    const categories = new Set<string>();
    availableTools.forEach((tool: ToolDefinition): void => {
      newItems.push(tool);
      categories.add(tool.category);
    });
    this.dataStore.items = newItems;
    this._items.next(Object.assign({}, this.dataStore).items);
    this.dataStore.categories = categories;
    this._categories.next(Object.assign({}, this.dataStore).categories);  
  }
}