'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', 'aurelia-event-aggregator'], function (_export, _context) {
  "use strict";

  var inject, bindable, customElement, EventAggregator, _dec, _dec2, _class, _desc, _value, _class2, _descriptor, Tabs;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      customElement = _aureliaTemplating.customElement;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }],
    execute: function () {
      _export('Tabs', Tabs = (_dec = customElement('aup-tabs'), _dec2 = inject(Element, EventAggregator), _dec(_class = _dec2(_class = (_class2 = function () {
        function Tabs(element, eventAggregator) {
          

          _initDefineProp(this, 'tabs', _descriptor, this);

          this._element = element;
          this._eventAggregator = eventAggregator;
        }

        Tabs.prototype.attached = function attached() {
          var active = this.tabs.find(function (tab) {
            return tab.active;
          });
          if (!active) return;
          document.querySelector('#' + active.id).classList.add('active');
          document.querySelector('#tabPill_' + active.id).classList.add('active');
        };

        Tabs.prototype.show = function show(event) {
          event.stopPropagation();
          var target = event.target;
          var active = event.target.parentElement.parentElement.querySelector('a.nav-link.active');
          var targetHref = target.getAttribute('href');
          if (!target.classList.contains('active')) {
            target.classList.add('active');
            document.querySelector(targetHref).classList.add('active');
            document.querySelector('#' + target.parentElement.id).classList.add('active');
          }
          if (active != target) {
            this._eventAggregator.publish('aurelia-plugins:tabs:tab-clicked:' + targetHref.replace('#', ''), event);
            var activeHref = active.getAttribute('href');
            active.classList.remove('active');
            document.querySelector(activeHref).classList.remove('active');
            document.querySelector('#' + active.parentElement.id).classList.remove('active');
          }
        };

        return Tabs;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'tabs', [bindable], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class) || _class));

      _export('Tabs', Tabs);
    }
  };
});