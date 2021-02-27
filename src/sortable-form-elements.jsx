import SortableElement from './sortable-element';
import PlaceHolder from './form-place-holder';
import BaseFormElements from './form-elements';
import { TwoColumnRow, ThreeColumnRow, FourColumnRow } from "./multi-column";

const {
  Header, Paragraph, Label, Counter, Scan, Voice, BatteryStatus, BTStatus,WFStatus,ScannerStatus, DateTime, Video, Message, Grid, LineBreak, TextInput, List, NumberInput, TextArea, Dropdown, Checkboxes,
  DatePicker, RadioButtons, Image, Rating, Tags, Signature, HyperLink, Download, Camera, Range,
} = BaseFormElements;

const FormElements = {};

FormElements.Header = SortableElement(Header);
FormElements.Paragraph = SortableElement(Paragraph);
FormElements.Label = SortableElement(Label);
FormElements.Counter = SortableElement(Counter);
FormElements.Scan = SortableElement(Scan);
FormElements.Voice = SortableElement(Voice);
FormElements.Video = SortableElement(Video);
FormElements.Message = SortableElement(Message);
FormElements.Grid = SortableElement(Grid);
FormElements.LineBreak = SortableElement(LineBreak);
FormElements.TextInput = SortableElement(TextInput);
FormElements.BatteryStatus = SortableElement(BatteryStatus);
FormElements.BTStatus = SortableElement(BTStatus);
FormElements.WFStatus = SortableElement(WFStatus);
FormElements.ScannerStatus = SortableElement(ScannerStatus);
FormElements.DateTime = SortableElement(DateTime);


FormElements.List = SortableElement(List);
FormElements.NumberInput = SortableElement(NumberInput);
FormElements.TextArea = SortableElement(TextArea);
FormElements.BatteryStatus = SortableElement(BatteryStatus);
FormElements.BTStatus = SortableElement(BTStatus);
FormElements.WFStatus = SortableElement(WFStatus);
FormElements.ScannerStatus = SortableElement(ScannerStatus);
FormElements.DateTime = SortableElement(DateTime);

FormElements.Dropdown = SortableElement(Dropdown);
FormElements.Signature = SortableElement(Signature);
FormElements.Checkboxes = SortableElement(Checkboxes);
FormElements.DatePicker = SortableElement(DatePicker);
FormElements.RadioButtons = SortableElement(RadioButtons);
FormElements.Image = SortableElement(Image);
FormElements.Rating = SortableElement(Rating);
FormElements.Tags = SortableElement(Tags);
FormElements.HyperLink = SortableElement(HyperLink);
FormElements.Download = SortableElement(Download);
FormElements.Camera = SortableElement(Camera);
FormElements.Range = SortableElement(Range);
FormElements.PlaceHolder = SortableElement(PlaceHolder);
FormElements.TwoColumnRow = SortableElement(TwoColumnRow);
FormElements.ThreeColumnRow = SortableElement(ThreeColumnRow);
FormElements.FourColumnRow = SortableElement(FourColumnRow);

export default FormElements;
