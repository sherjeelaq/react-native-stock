import {getHeight, getWidth} from 'lib'

const rowStyles = (props: RowProps) => {
  return `
    flex-direction: row;
    background-color: ${props.bg || 'transparent'};

    ${
      props.startAll &&
      `
      justify-content: flex-start;
      align-items: flex-start;
    `
    };
    ${
      props.centerAll &&
      `
      justify-content: center;
      align-items: center;
    `
    };
    ${props.between && `justify-content: space-between;`};
    ${props.around && `justify-content: space-around;`};
    ${props.evenly && `justify-content: space-evenly;`};
    ${props.alignEnd && `align-items: flex-end;`};
    ${props.alignCenter && `align-items: center;`};
    ${props.alignStart && `align-items: flex-start;`};

    ${
      props.wid &&
      `width: ${props.wid.includes('%') ? props.wid : getWidth(props.wid)}`
    };
    ${props.minWid && `min-width: ${props.minWid}`};
    ${props.maxWid && `max-width: ${props.maxWid}`};
    ${
      props.ht &&
      `height: ${props.ht.includes('%') ? props.ht : getHeight(props.ht)}`
    };
    ${props.minHt && `min-height: ${props.minHt};`};
    
    ${props.marg && `margin: ${props.marg}`};
    ${props.pad && `padding: ${props.pad}`};
    ${!props.noFlex && `flex: 1`};
    ${props.wrap && `flex-wrap: wrap`};
    ${props.hasBorder && `border: ${props.hasBorder}`};
    ${props.hasRadius && `border-radius: ${props.hasRadius}`};
  `
}

export default rowStyles
