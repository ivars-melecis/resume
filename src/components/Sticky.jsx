import React, { useState, useEffect } from 'react';

const Sticky = props => {
  const [config, setConfig] = useState({ isSticky: false });

  useEffect(() => {
    function Get_Offset_From_Start(object, offset) {
      offset = offset || { x: 0, y: 0 };
      offset.x += object.offsetLeft;
      offset.y += object.offsetTop;
      if (object.offsetParent) {
        offset = Get_Offset_From_Start(object.offsetParent, offset);
      }
      return offset;
    }

    function Get_Offset_From_CurrentView(myElement) {
      if (!myElement) return;
      var offset = Get_Offset_From_Start(myElement);
      var scrolled = GetScrolled(myElement.parentNode);
      var posX = offset.x - scrolled.x;
      var posY = offset.y - scrolled.y;
      return { lefttt: posX, toppp: posY };
    }

    //helper
    function GetScrolled(object, scrolled) {
      scrolled = scrolled || { x: 0, y: 0 };
      scrolled.x += object.scrollLeft;
      scrolled.y += object.scrollTop;
      if (object.tagName.toLowerCase() !== 'html' && object.parentNode) {
        scrolled = GetScrolled(object.parentNode, scrolled);
      }
      return scrolled;
    }

    function isSticky() {
      var Positionsss = Get_Offset_From_CurrentView(props.item.current);

      if (Positionsss.toppp <= 0) {
        setConfig({ isSticky: true });
      } else {
        setConfig({ isSticky: false });
      }

      //console.log(Positionsss);
    }

    window.addEventListener('scroll', isSticky, false);

    isSticky();

    return () => {
      window.removeEventListener('scroll', isSticky, false);
    };
  }, [props.item]);

  const classes = config.isSticky ? 'sticky-wrap sticky-active' : 'sticky-wrap';

  return <div className={classes}>{props.children}</div>;
};

export default Sticky;
