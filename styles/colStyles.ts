import {getHeight, getWidth} from 'lib'

const colStyles = (props: ColProps) => {
  return `
    flex-direction: column;

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
    ${
      props.center &&
      `
      align-items: center;
    `
    };
    ${
      props.size &&
      `width: ${props.size.includes('%') ? props.size : getWidth(props.size)};
    height: ${props.size.includes('%') ? props.size : getWidth(props.size)};`
    };
    ${props.between && `justify-content: space-between;`};
    ${props.end && `align-self: flex-end;`};
    ${props.endJustify && `justify-content: flex-end`};
    ${props.endAlign && `align-items: flex-end`};
    ${props.pad && `padding: ${props.pad}`};
    ${props.bg && `background-color: ${props.bg}`};
    ${!props.noFlex && `flex: 1`};
    ${
      props.ht &&
      `height: ${props.ht.includes('%') ? props.ht : getHeight(props.ht)}`
    };
    ${props.minHt && `min-height: ${props.minHt}`};
    ${
      props.wid &&
      `width: ${props.wid.includes('%') ? props.wid : getWidth(props.wid)}`
    };
    ${props.marg && `margin: ${props.marg}`};
    ${props.wrap && `flex-wrap: wrap`};
    ${props.hasRadius && `border-radius: ${props.hasRadius}`};
    ${props.hasBorder && `border: ${props.hasBorder}`};
  `
}

export default colStyles
