$('#mark-1').hover(function() { $(this).addClass('fa-flip');}, 
                   function() { $(this).removeClass('fa-flip');});

$('#mark-2').hover(function() { $(this).addClass('fa-flip');}, 
                   function() { $(this).removeClass('fa-flip');});

$('#mark-3').hover(function() { $(this).addClass('fa-flip');},
                   function() { $(this).removeClass('fa-flip'); });


// rewrite in react code 
// npm install classnames (install classnames package)
/*  import React, { useState } from 'react';
    import classNames from 'classnames';
    import './App.css'; // Make sure to import your CSS file

    const HoverComponent = () => {
      const [isHovered, setIsHovered] = useState(false);

      return (
        <div
          id="mark-1"
          className={classNames({ 'fa-flip': isHovered })}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Hover over me!
        </div>
      );
    };

    export default HoverComponent;
*/