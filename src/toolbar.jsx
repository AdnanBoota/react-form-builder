/**
 * <Toolbar />
 */

import React from "react";
import ToolbarItem from "./toolbar-draggable-item";
import ID from "./UUID";
import store from "./stores/store";

export default class Toolbar extends React.Component {
  constructor(props) {
    super(props);

    const items = this.props.items ? this.props.items : this._defaultItems();
    this.state = {
      items,
    };
    store.subscribe((state) => this.setState({ store: state }));
    this.create = this.create.bind(this);
  }

  static _defaultItemOptions(element) {
    switch (element) {
      case "Dropdown":
        return [
          {
            value: "place_holder_option_1",
            text: "Place holder option 1",
            key: `dropdown_option_${ID.uuid()}`,
          },
          {
            value: "place_holder_option_2",
            text: "Place holder option 2",
            key: `dropdown_option_${ID.uuid()}`,
          },
          {
            value: "place_holder_option_3",
            text: "Place holder option 3",
            key: `dropdown_option_${ID.uuid()}`,
          },
        ];
      case "Tags":
        return [
          {
            value: "place_holder_tag_1",
            text: "Place holder tag 1",
            key: `tags_option_${ID.uuid()}`,
          },
          {
            value: "place_holder_tag_2",
            text: "Place holder tag 2",
            key: `tags_option_${ID.uuid()}`,
          },
          {
            value: "place_holder_tag_3",
            text: "Place holder tag 3",
            key: `tags_option_${ID.uuid()}`,
          },
        ];
      case "Checkboxes":
        return [
          {
            value: "place_holder_option_1",
            text: "Place holder option 1",
            key: `checkboxes_option_${ID.uuid()}`,
          },
          {
            value: "place_holder_option_2",
            text: "Place holder option 2",
            key: `checkboxes_option_${ID.uuid()}`,
          },
          {
            value: "place_holder_option_3",
            text: "Place holder option 3",
            key: `checkboxes_option_${ID.uuid()}`,
          },
        ];
      case "RadioButtons":
        return [
          {
            value: "place_holder_option_1",
            text: "Place holder option 1",
            key: `radiobuttons_option_${ID.uuid()}`,
          },
          {
            value: "place_holder_option_2",
            text: "Place holder option 2",
            key: `radiobuttons_option_${ID.uuid()}`,
          },
          {
            value: "place_holder_option_3",
            text: "Place holder option 3",
            key: `radiobuttons_option_${ID.uuid()}`,
          },
        ];
      default:
        return [];
    }
  }

  _defaultItems() {
    return [
      {
        key: "Header",
        name: "Header Text",
        icon: "fas fa-heading",
        static: true,
        content: "Placeholder Text...",
        type: "premitives",
      },
      {
        key: "Label",
        name: "Label",
        static: true,
        icon: "fas fa-font",
        content: "Placeholder Text...",
        type: "premitives",

      },
      {
        key: "Paragraph",
        name: "Paragraph",
        static: true,
        icon: "fas fa-paragraph",
        content: "Placeholder Text...",
        type: "premitives",

      },
      {
        key: "LineBreak",
        name: "Line Break",
        static: true,
        icon: "fas fa-arrows-alt-h",
        type: "premitives",

      },
      {
        key: "Dropdown",
        canHaveAnswer: true,
        name: "Dropdown",
        icon: "far fa-caret-square-down",
        label: "Placeholder Label",
        field_name: "dropdown_",
        options: [],
        type: "premitives",

      },
      {
        key: "Tags",
        canHaveAnswer: true,
        name: "Tags",
        icon: "fas fa-tags",
        label: "Placeholder Label",
        field_name: "tags_",
        options: [],
        type: "premitives",

      },
      {
        key: "Checkboxes",
        canHaveAnswer: true,
        name: "Checkboxes",
        icon: "far fa-check-square",
        label: "Placeholder Label",
        field_name: "checkboxes_",
        options: [],
        type: "premitives",

      },
      {
        key: "RadioButtons",
        canHaveAnswer: true,
        name: "Multiple Choice",
        icon: "far fa-dot-circle",
        label: "Placeholder Label",
        field_name: "radiobuttons_",
        options: [],
        type: "premitives",

      },
      {
        key: "TextInput",
        canHaveAnswer: true,
        name: "Text Input",
        label: "Placeholder Label",
        icon: "fas fa-font",
        field_name: "text_input_",
        type: "premitives",

      },
      {
        key: "NumberInput",
        canHaveAnswer: true,
        name: "Number Input",
        label: "Placeholder Label",
        icon: "fas fa-plus",
        field_name: "number_input_",
        type: "premitives",

      },
      {
        key: "TextArea",
        canHaveAnswer: true,
        name: "Multi-line Input",
        label: "Placeholder Label",
        icon: "fas fa-text-height",
        field_name: "text_area_",
        type: "premitives",

      },
      {
        key: "TwoColumnRow",
        canHaveAnswer: false,
        name: "Two Column Row",
        label: "",
        icon: "fas fa-columns",
        field_name: "two_col_row_",
        type: "premitives",

      },
      {
        key: "ThreeColumnRow",
        canHaveAnswer: false,
        name: "Three Column Row",
        label: "",
        icon: "fas fa-columns",
        field_name: "three_col_row_",
        type: "premitives",

      },
      {
        key: "FourColumnRow",
        canHaveAnswer: false,
        name: "Four Column Row",
        label: "",
        icon: "fas fa-columns",
        field_name: "four_col_row_",
        type: "premitives",

      },
      {
        key: "Image",
        name: "Image",
        label: "",
        icon: "far fa-image",
        field_name: "image_",
        src: "",
        type: "premitives",

      },
      {
        key: "Rating",
        canHaveAnswer: true,
        name: "Rating",
        label: "Placeholder Label",
        icon: "fas fa-star",
        field_name: "rating_",
        type: "premitives",

      },
      {
        key: "DatePicker",
        canDefaultToday: true,
        canReadOnly: true,
        dateFormat: "MM/dd/yyyy",
        timeFormat: "hh:mm aa",
        showTimeSelect: false,
        showTimeSelectOnly: false,
        name: "Date",
        icon: "far fa-calendar-alt",
        label: "Placeholder Label",
        field_name: "date_picker_",
        type: "premitives",

      },
      {
        key: "Signature",
        canReadOnly: true,
        name: "Signature",
        icon: "fas fa-pen-square",
        label: "Signature",
        field_name: "signature_",
        type: "premitives",

      },
      {
        key: "HyperLink",
        name: "Web site",
        icon: "fas fa-link",
        static: true,
        content: "Placeholder Web site link ...",
        href: "http://www.example.com",
        type: "premitives",

      },
      {
        key: "Download",
        name: "File Attachment",
        icon: "fas fa-file",
        static: true,
        content: "Placeholder file name ...",
        field_name: "download_",
        file_path: "",
        _href: "",
        type: "premitives",

      },
      {
        key: "Range",
        name: "Range",
        icon: "fas fa-sliders-h",
        label: "Placeholder Label",
        field_name: "range_",
        step: 1,
        default_value: 3,
        min_value: 1,
        max_value: 5,
        min_label: "Easy",
        max_label: "Difficult",
        type: "premitives",

      },
      {
        key: "Camera",
        name: "Camera",
        icon: "fas fa-camera",
        label: "Placeholder Label",
        field_name: "camera_",
        type: "premitives",

      },
      {
        key: "Counter",
        name: "Counter",
        static: true,
        icon: "fas fa-calculator",
        content: "Placeholder Counter...",
        type: "premitives",

      },
      {
        key: "Scan",
        name: "Scan",
        static: true,
        icon: "fas fa-qrcode",
        content: "Placeholder Scan...",
        type: "premitives",

      },
      {
        key: 'Voice',
        name: 'Voice',
        "static": true,
        icon: "fas fa-microphone",
        content: 'Placeholder Voice...',
        type: "premitives",

      },
      {
        key: "Video",
        name: "Video",
        static: true,
        icon: "fas fa-video",
        content: "Placeholder Video...",
        type: "premitives",

      }, 
      {
        key: "Message",
        name: "Message",
        static: true,
        icon: "fas fa-envelope",
        content: "Placeholder Message...",
        type: "premitives",

      },
      {
        key: "Grid",
        name: "Grid",
        static: true,
        icon: "fas fa-th",
        content: "Placeholder Grid...",
        type: "premitives",

      },
      {
        key: "List",
        type: "premitives",
        canHaveAnswer: true,
        name: "List",
        label: "Placeholder List",
        icon: "fas fa-list",
        field_name: "list_",
        type: "premitives",
        
      },


      //  "prebuilt",
      {
        key: "BatteryStatus",
        type: "prebuilt",
        canHaveAnswer: true,
        name: "Battery Status",
        label: "Placeholder Battery Status",
        icon: "fas fa-text-height",
        field_name: "battrey_status_",
      },
      {
        key: "BTStatus",
        type: "prebuilt",
        canHaveAnswer: true,
        name: "BT Status",
        label: "Placeholder BT Status",
        icon: "fas fa-text-height",
        field_name: "bt_status_",
      },{
        key: "WFStatus",
        type: "prebuilt",
        canHaveAnswer: true,
        name: "WF Status",
        label: "Placeholder WF Status",
        icon: "fas fa-text-height",
        field_name: "wf_status_",
      },{
        key: "ScannerStatus",
        type: "prebuilt",
        canHaveAnswer: true,
        name: "Scanner Status",
        label: "Placeholder Scanner Status",
        icon: "fas fa-text-height",
        field_name: "scanner_status_",
      },{
        key: "DateTime",
        type: "prebuilt",
        canHaveAnswer: true,
        name: "Datetime",
        label: "Placeholder Datetime",
        icon: "fas fa-text-height",
        field_name: "date_time_",
      },
    ];
  }

  create(item) {
    const elementOptions = {
      id: ID.uuid(),
      element: item.element || item.key,
      text: item.name,
      static: item.static,
      required: false,
      showDescription: item.showDescription,
    };

    if (this.props.showDescription === true && !item.static) {
      elementOptions.showDescription = true;
    }

    if (item.static) {
      elementOptions.bold = false;
      elementOptions.italic = false;
    }

    if (item.canHaveAnswer) {
      elementOptions.canHaveAnswer = item.canHaveAnswer;
    }

    if (item.canReadOnly) {
      elementOptions.readOnly = false;
    }

    if (item.canDefaultToday) {
      elementOptions.defaultToday = false;
    }

    if (item.content) {
      elementOptions.content = item.content;
    }

    if (item.href) {
      elementOptions.href = item.href;
    }

    elementOptions.canHavePageBreakBefore =
      item.canHavePageBreakBefore !== false;
    elementOptions.canHaveAlternateForm = item.canHaveAlternateForm !== false;
    elementOptions.canHaveDisplayHorizontal =
      item.canHaveDisplayHorizontal !== false;
    if (elementOptions.canHaveDisplayHorizontal) {
      elementOptions.inline = item.inline;
    }
    elementOptions.canHaveOptionCorrect = item.canHaveOptionCorrect !== false;
    elementOptions.canHaveOptionValue = item.canHaveOptionValue !== false;
    elementOptions.canPopulateFromApi = item.canPopulateFromApi !== false;

    if (item.class_name) {
      elementOptions.class_name = item.class_name;
    }

    if (item.key === "Image") {
      elementOptions.src = item.src;
    }

    if (item.key === "DatePicker") {
      elementOptions.dateFormat = item.dateFormat;
      elementOptions.timeFormat = item.timeFormat;
      elementOptions.showTimeSelect = item.showTimeSelect;
      elementOptions.showTimeSelectOnly = item.showTimeSelectOnly;
    }

    if (item.key === "Download") {
      elementOptions._href = item._href;
      elementOptions.file_path = item.file_path;
    }

    if (item.key === "Range") {
      elementOptions.step = item.step;
      elementOptions.default_value = item.default_value;
      elementOptions.min_value = item.min_value;
      elementOptions.max_value = item.max_value;
      elementOptions.min_label = item.min_label;
      elementOptions.max_label = item.max_label;
    }

    if (item.defaultValue) {
      elementOptions.defaultValue = item.defaultValue;
    }

    if (item.field_name) {
      elementOptions.field_name = item.field_name + ID.uuid();
    }

    if (item.label) {
      elementOptions.label = item.label;
    }

    if (item.options) {
      if (item.options.length > 0) {
        elementOptions.options = item.options;
      } else {
        elementOptions.options = Toolbar._defaultItemOptions(
          elementOptions.element
        );
      }
    }

    return elementOptions;
  }

  _onClick(item) {
    // ElementActions.createElement(this.create(item));
    store.dispatch("create", this.create(item));
  }

  render() {
    console.log(this.state.items);
    return (
      <div className="col-md-3 react-form-builder-toolbar float-right">
        <h4>Premtives</h4>
        <ul>
          {this.state.items.filter(k=>k.type==='premitives').map((item) => (
            <ToolbarItem
              data={item}
              key={item.key}
              onClick={this._onClick.bind(this, item)}
              onCreate={this.create}
            />
          ))}
        </ul>
        <h4>Prebuild</h4>
        <ul>
          {this.state.items.filter(k=>k.type==='prebuilt').map((item) => (
            <ToolbarItem
              data={item}
              key={item.key}
              onClick={this._onClick.bind(this, item)}
              onCreate={this.create}
            />
          ))}
        </ul>
      </div>
    );
  }
}
