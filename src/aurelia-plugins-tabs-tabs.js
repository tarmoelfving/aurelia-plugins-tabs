// IMPORTS
import {inject} from 'aurelia-dependency-injection';
import {bindable, customElement} from 'aurelia-templating';
import {EventAggregator} from 'aurelia-event-aggregator';


// CLASS ATTRIBUTES
@customElement('aup-tabs')
@inject(Element, EventAggregator)


// PUBLIC CLASS
export class Tabs {
  // PRIVATE PROPERTIES
  _element;
  _eventAggregator;

  // BINDABLE PROPERTIES
  @bindable tabs;

  // CONSTRUCTOR
  constructor(element, eventAggregator) {
    this._element = element;
    this._eventAggregator = eventAggregator;
  }

  // LIFECYCLE HANDLER
  attached() {
    var active = this.tabs.find(tab => tab.active);
    if (!active) return;
    document.querySelector('#' + active.id).classList.add('active');
	document.querySelector('#tabPill_' + active.id).classList.add('active');
  }

  // PUBLIC METHODS
  show(event) {
    event.stopPropagation();
    var target = event.target;
    var active = event.target.parentElement.parentElement.querySelector('a.nav-link.active');
    var targetHref = target.getAttribute('href');
    if(!target.classList.contains('active')) {
		target.classList.add('active');
		document.querySelector(targetHref).classList.add('active');
		document.querySelector('#' + target.parentElement.id).classList.add('active');
	}
	if(active != target){
		this._eventAggregator.publish('aurelia-plugins:tabs:tab-clicked:' + targetHref.replace('#', ''), event);
		var activeHref = active.getAttribute('href');
		active.classList.remove('active');		
		document.querySelector(activeHref).classList.remove('active');
		document.querySelector('#' + active.parentElement.id).classList.remove('active');
	}
  }
}
