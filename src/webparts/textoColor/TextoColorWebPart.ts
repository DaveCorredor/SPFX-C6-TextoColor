import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneSlider,
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'TextoColorWebPartStrings';
import TextoColor from './components/TextoColor';
import { ITextoColorProps } from './components/ITextoColorProps';
import { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';


export interface ITextoColorWebPartProps {
  palabraInicio: string;
  palabra1:string;
  palabra2:string;
  palabra3:string;
  palabra4: string;
  colorTitulo: string;
  colorFondo: string;
  size: number;
}

export default class TextoColorWebPart extends BaseClientSideWebPart<ITextoColorWebPartProps> {


  public render(): void {
    const element: React.ReactElement<ITextoColorProps> = React.createElement(
      TextoColor,
      {
        palabraInicio: this.properties.palabraInicio,
        palabra1: this.properties.palabra1,
        palabra2: this.properties.palabra2,
        palabra3: this.properties.palabra3,
        palabra4: this.properties.palabra4,
        colorTitulo: this.properties.colorTitulo,
        colorFondo: this.properties.colorFondo,
        size: this.properties.size,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('palabraInicio', {
                  label: strings.DescriptionFieldLabelPalabraInicio,
                  maxLength: 7,
                  placeholder: strings.DescripcionPlaceholderPalabraTitulo
                }),
                PropertyPaneTextField('palabra1', {
                  label: strings.DescriptionFieldLabelPalabra,
                  maxLength: 14,
                  placeholder: strings.DescripcionPlaceholderPalabra
                }),
                PropertyPaneTextField('palabra2', {
                  label: strings.DescriptionFieldLabelPalabra,
                  maxLength: 14,
                  placeholder: strings.DescripcionPlaceholderPalabra
                }),
                PropertyPaneTextField('palabra3', {
                  label: strings.DescriptionFieldLabelPalabra,
                  maxLength: 14,
                  placeholder: strings.DescripcionPlaceholderPalabra
                }),
                PropertyPaneTextField('palabra4', {
                  label: strings.DescriptionFieldLabelPalabra,
                  maxLength: 14,
                  placeholder: strings.DescripcionPlaceholderPalabra
                }),
                PropertyFieldColorPicker('colorTitulo', {
                  label: 'Color Titulo',
                  selectedColor: this.properties.colorTitulo,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  disabled: false,
                  debounce: 1000,
                  isHidden: false,
                  alphaSliderHidden: false,
                  style: PropertyFieldColorPickerStyle.Inline,
                  iconName: 'Precipitation',
                  key: 'colorFieldId'
                }),
                PropertyFieldColorPicker('colorFondo', {
                  label: 'Color Fondo',
                  selectedColor: this.properties.colorFondo,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  disabled: false,
                  debounce: 1000,
                  isHidden: false,
                  alphaSliderHidden: false,
                  style: PropertyFieldColorPickerStyle.Inline,
                  iconName: 'Precipitation',
                  key: 'colorFieldId'
                }),
                PropertyPaneSlider('size', {
                  label: 'Tamaño',
                  min: 20, 
                  max: 50,
                  step: 1,
                  showValue: true,
                  value: 35
                })

              ]
            }
          ]
        }
      ]
    };
  }
}
