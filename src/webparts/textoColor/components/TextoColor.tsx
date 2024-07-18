import * as React from 'react';
import styles from './TextoColor.module.scss';
import type { ITextoColorProps } from './ITextoColorProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class TextoColor extends React.Component<ITextoColorProps, {}> {
  public render(): React.ReactElement<ITextoColorProps> {
    const {
      palabraInicio,
      palabra1,
      palabra2,
      palabra3,
      palabra4,
      colorTitulo,
      colorFondo,
      size,

    } = this.props;

    return (
      <div className={styles.container} style={{ backgroundColor: escape(colorFondo) }}>
        <div className={styles.content} style={{ fontSize: size+'px'}}>
          <div className={styles.contentContainer}>
            <p className={styles.contentContainerText} style={{ color: escape(colorTitulo) }}>
              {escape(palabraInicio)}
            </p>
            <ul className={styles.contentContainerList}>
              <li className={styles.contentContainerListItem} style={{ color: escape(colorTitulo) }}>
                {escape(palabra1)}
              </li>
              <li className={styles.contentContainerListItem} style={{ color: escape(colorTitulo) }}>
                {escape(palabra2)}
              </li>
              <li className={styles.contentContainerListItem} style={{ color: escape(colorTitulo) }}>
                {escape(palabra3)}
              </li>
              <li className={styles.contentContainerListItem} style={{ color: escape(colorTitulo) }}>
                {escape(palabra4)}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
