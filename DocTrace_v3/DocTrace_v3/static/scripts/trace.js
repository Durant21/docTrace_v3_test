
    // https://renenyffenegger.ch/notes/design/graphic/svg/examples/line

    //document.getElementById('cont').setAttribute("height", "1000px");
      var traces1 = [
        ['','doc1','doc7'],
        ['','doc2','doc11'],
        ['','doc3','doc11'],
        ['','doc4','doc11'],
        ['','doc5','doc11'],
        ['','doc6','doc7'],
        ['','doc11','doc7'],
        ['','doc7','doc8'],
        ['','doc7','doc9'],
        ['','doc7','doc10'],
        ['','doc7','doc12a'],
        ['','doc3','doc6'],
        ['','doc9','doc14'],
        ['','doc7','doc12b'],
        ['','doc1a','doc1'],
        ['','doc1b','doc1a'],
        ['','docA','doc1a'],
        ['','docB','doc1b']
      ];
traces2 = [
        ['','header1','doc7'],
        ['','footer1','doc7']
        ];
      // "pa" is panel array
      var paL1 = new Array ();
      var paL2 = new Array ();
      var paR1 = new Array ();
      var paR2 = new Array ();
      var myPts = new Array ();
      var panelNumber = 1;
      var superArray = new Array ();

      var firstArrayL = new Array ();
      var firstArrayR = new Array ();

      var gggL = .40;
      var gggR = .60;
      var yFactor = 50;
      var dFactor = 1;
  function buildLeftPanels(theArray,centerDoc,locPanelNumber, locPanelSide,traces)
  {
    var tempArray = new Array ();
    if (locPanelNumber == 1) {
        // set variables for x,y
        var x = svgWidth * gggL;// * (gggL - (.5 * dFactor));  // .30
        var y = 0;
    } else if (locPanelNumber == 2) {
        x = svgWidth * (gggL - (.10 * dFactor));  // .30
        y = 0;
    } else if (locPanelNumber == 3) {
        x = svgWidth * (gggL - (.15 * dFactor));  // .25
        y = 0;
    } else if (locPanelNumber == 4) {
        x = svgWidth * (gggL - (.20 * dFactor));  // .25
        y = 0;
    } else if (locPanelNumber == 5) {
        x = svgWidth * (gggL - (.25 * dFactor));  // .25
        y = 0;
    } else if (locPanelNumber == 6) {
        x = svgWidth * (gggL - (.30 * dFactor));  // .25
        y = 0;
    } else if (locPanelNumber == 7) {
        x = svgWidth * (gggL - (.35 * dFactor));  // .25
        y = 0;
    } else if (locPanelNumber == 8) {
        x = svgWidth * (gggL - (.40 * dFactor));  // .25
        y = 0;
    } else if (locPanelNumber == 9) {
        x = svgWidth * (gggL - (.45 * dFactor));  // .25
        y = 0;
    } else if (locPanelNumber == 10) {
        x = svgWidth * (gggL - (.50 * dFactor));  // .25
        y = 0;
    } else {
        //alert(locPanelNumber + '  oops...')
        x = 1;
        y = 0;
    }


    var u = 0;
    for(var i = 0 ; i < theArray.length; i ++)
    {
        if (theArray[i]) {
            t =  theArray[i];
            if (locPanelSide == "L") {
                r = t[3];
            } else {
                r = t[4];
            }

            for(var n = 0 ; n < traces.length; n ++)
            {
                if (traces[n])
                {
                    if (traces[n][2] == r) {
                        // alert(traces[n][0]);
                        var nArray = new Array ();
                        y = y + yFactor;
                        // nArray[0] = [x,y,traces[n][0],traces[n][1]];
                        nArray[0] = [locPanelNumber,x,y,traces[n][1],traces[n][2],t[1],t[2],locPanelSide];
                        // paL2[n] = nArray;
                        superArray[superArray.length + 1] = nArray;
                        tempArray[u] = [locPanelNumber,x,y,traces[n][1],traces[n][2],t[1],t[2]];
                        u = u + 1;
                        a = 0;
                    }
                }
            }
        }
    }

    if (tempArray) {
        console.log('buildLeftPanels():  tempArray.length = ' + tempArray.length)
    }

    if ((tempArray) && (tempArray.length > 0) && (tempArray.length < 100))
    {
        buildLeftPanels(tempArray,'doc1',locPanelNumber + 1,locPanelSide, traces)
    }
}

   function buildRightPanels(theArray,centerDoc,locPanelNumber, locPanelSide,traces)
  {
        var tempArray1 = new Array ();
        if (locPanelNumber == 1) {
            // set variables for x,y
            var x = svgWidth * gggR;  //  0.60
            var y = 0;
        } else if (locPanelNumber == 2) {
            x = svgWidth * (gggR + (.10 * dFactor));  //  0.75
            y = 0;
        } else if (locPanelNumber == 3) {
            x = svgWidth * (gggR + (.15 * dFactor));  //  0.85
            y = 0;
        } else if (locPanelNumber == 4) {
            x = svgWidth * (gggR + (.20 * dFactor));  //  0.85
            y = 0;
        } else if (locPanelNumber == 5) {
            x = svgWidth * (gggR + (.25 * dFactor));  //  0.85
            y = 0;
        } else if (locPanelNumber == 6) {
            x = svgWidth * (gggR + (.30 * dFactor));  //  0.85
            y = 0;
        } else if (locPanelNumber == 7) {
            x = svgWidth * (gggR + (.35 * dFactor));  //  0.85
            y = 0;
        } else if (locPanelNumber == 8) {
            x = svgWidth * (gggR + (.40 * dFactor));  //  0.85
            y = 0;
        } else if (locPanelNumber == 9) {
            x = svgWidth * (gggR + (.45 * dFactor));  //  0.85
            y = 0;
        } else if (locPanelNumber == 9) {
            x = svgWidth * (gggR + (.45 * dFactor));  //  0.85
            y = 0;
        } else if (locPanelNumber == 10) {
            x = svgWidth * (gggR + (.50 * dFactor));  //  0.85
            y = 0;
        } else {
            x =  svgWidth * .96;
            y = 1;
        }

        var u = 0;
        for(var i = 0 ; i < theArray.length; i ++)
        {
            if (theArray[i]) {
                t =  theArray[i];

            if (locPanelSide == "L") {
                r = t[3];
            } else {
                r = t[4];
            }

            for(var n = 0 ; n < traces.length; n ++)
            {
                if (traces[n])
                {
                    if (traces[n][1] == r) {
                        var nArray = new Array ();
                        y = y + yFactor;  // was 50
                        v = lookForValInArray(x,y,traces[n][2], superArray);
                        //nArray[0] = [locPanelNumber,x,y,traces[n][1],traces[n][2],t[1],t[2],locPanelSide];
                        nArray[0] = [locPanelNumber,v.aValX,v.aValY,traces[n][1],traces[n][2],t[1],t[2],locPanelSide];

                        superArray[superArray.length + 1] = nArray;
                        tempArray1[u] = [locPanelNumber,x,y,traces[n][1],traces[n][2],t[1],t[2]];
                        //tempArray1[u] = [locPanelNumber,x,y,traces[n][1],traces[n][2],t[1],t[2]];
                        u = u + 1;
                        a = 0;
                    }
                }
            }
        }
    }

        if (tempArray1) {
            console.log('buildRightPanels():  tempArray.length = ' + tempArray1.length)
        }


    if ((tempArray1) && (tempArray1.length > 0) && (tempArray1.length < 100))
    {
    buildRightPanels(tempArray1,'doc11',locPanelNumber + 1,locPanelSide,traces)
    }
}

function lookForValInArray(x1, y1,aVal, aArray) {
      var nArray = new Array ();
      aValX = x1;
      aValY = y1;
      replaced = 'false';

      for(var i = 0 ; i < aArray.length; i ++) {
          if (aArray[i]) {
              b = aArray[i][0][4];
              if (aVal == b) {

                aValX = aArray[i][0][1];
                aValY = aArray[i][0][2];
                replaced = 'true';
                console.log('(' + i + ') replaced ' + x1 + ',' + y1 + ' with ' + aValX + ',' + aValY)
              }
          }
      }

      nArray = {aValX,aValY,replaced}
      return nArray;
}

   function buildTraceDiagram(centerText,traces) {

    // clear the circles left over from previous click by emptying the superArray.
    superArray = [];

    // svgHeight = document.getElementById('secondsvg').getAttribute("height");
    // svgWidth = document.getElementById('secondsvg').getAttribute("width");
t = document.getElementById('secondsvg');
        svgWidth = t.clientWidth;
        svgHeight = t.clientHeight;
    secondsvg = document.getElementById('secondsvg');
    secondsvg.parentNode.replaceChild(secondsvg.cloneNode(false), secondsvg);
    $("#secondsvg").empty();

      //alert( svgWidth);
      var pCenterX = svgWidth/2;
      var pCenterY = svgHeight/4;
      //var w = 300;
      var cars = ["Saab", "Volvo", "BMW"];



      //var centerText = 'header1';
      firstArrayL[0] = ['',pCenterX,pCenterY,centerText];
      firstArrayR[0] = ['',pCenterX,pCenterY,'',centerText];
       buildLeftPanels(firstArrayL,centerText,panelNumber,'L',traces);
       buildRightPanels(firstArrayR,centerText,panelNumber,'R',traces);

      // set variables for x,y
      var x = svgWidth * .25;
      var y = 0;
      // alert(traces.length)
      // for(var i = 0 ; i < 15; i ++)
      for(var i = 0;i < traces.length; i ++)
      {
        if (traces[i]) {

              if (traces[i][2] == centerText) { //'doc7'
              // alert("P: " + traces[i][0] + "," + traces[i][1]);
                var nArray = new Array ();
                y = y + 50;
                // nArray[0] = [x,y,traces[i][1],traces[i][2]];
                nArray[0] = [x,y,traces[i][1],traces[i][2],pCenterX,pCenterY];
                paL1[i] = nArray;
              }
        }
      }

      x = svgWidth * .10;
      y = 0;
      for(var i = 0 ; i < paL1.length; i ++)
      {
        if (paL1[i]) {
          t =  paL1[i][0];
          r = t[2];
          // alert(r);
          for(var n = 0 ; n < traces.length; n ++)
          {
            if (traces[n])
            {
              if (traces[n][2] == r) {
                // alert(traces[n][0]);
                var nArray = new Array ();
                y = y + 50;
                // nArray[0] = [x,y,traces[n][0],traces[n][1]];
                nArray[0] = [x,y,traces[n][1],traces[n][2],t[0],t[1]];
                paL2[n] = nArray;

                a = 0;
              }
            }
          }
        }
      }

      // populate panel R 1  (paR1)
      y = 0;
      x = svgWidth * .60;
      for(var i = 0 ; i < traces.length; i ++)
      {
       // alert("C: " + traces[i][1]);
       if  (traces[i])
       {
            if (traces[i][1] == centerText) {  // 'doc7'
              var nArray = new Array ();
              y = y + 50;
              // nArray[0] = [x,y];
              nArray[0] = [x,y,traces[i][1],traces[i][2],pCenterX,pCenterY];
              paR1[i] = nArray;
            }
          }
      }


    x = svgWidth * .80;
      y = 0;
      for(var i = 0 ; i < paR1.length; i ++)
      {
        if (paR1[i]) {
          t =  paR1[i][0];
          r = t[3];
          // alert(r);
          for(var n = 0 ; n < traces.length; n ++)
          {
            if (traces[n])
            {
              if (traces[n][1] == r) {
                // alert(traces[n][0]);
                var nArray = new Array ();
                y = y + 50;
                // nArray[0] = [x,y,traces[n][0],traces[n][1]];
                nArray[0] = [x,y,traces[n][1],traces[n][2],t[0],t[1]];
                paR2[n] = nArray;

                a = 0;
              }
            }
          }

        }
      }



      // draw circles
      // document.getElementById("demo").innerHTML = cars;
      var x1 = new Array ();
      var svgns = "http://www.w3.org/2000/svg",
      container = document.getElementById( 'cont' );
      for(var i = 0 ; i < paL1.length; i ++)
      {
        var circle = document.createElementNS(svgns, 'circle');
        x1 = paL1[i];
        if (x1) {
          x = x1[0][0];
          y = x1[0][1];
          valP = x1[0][2];
          var tmpPt = new Array ();
          tmpPt[0] = x;
          tmpPt[1] = y;
          circle.setAttributeNS(null, 'cx', x);
          circle.setAttributeNS(null, 'cy', y);
          circle.setAttributeNS(null, 'r', 1);
          circle.setAttributeNS(null, 'style', 'fill: none; stroke: blue; stroke-width: 1px;' );
          container.appendChild(circle);


          var text1 = document.createElementNS(svgns, 'text');
          text1.setAttributeNS(null,'x',x);
          text1.setAttributeNS(null,'y',y);
          text1.setAttributeNS(null,'font-size','20px');
          text1.setAttributeNS(null,'fill','blue');
          var textNode = document.createTextNode(valP);
          text1.appendChild(textNode);
          document.getElementById("myg").appendChild(text1);
          container.appendChild(text1);

        }
      }



      // draw the PL2 circles
      for(var i = 0 ; i < paL2.length; i ++)
      {
        var circle3 = document.createElementNS(svgns, 'circle');
        x1 = paL2[i];
        if (x1) {
          x = x1[0][0];
          y = x1[0][1];
          valP = x1[0][2];

          circle3.setAttributeNS(null, 'cx', x);
          circle3.setAttributeNS(null, 'cy', y);
          circle3.setAttributeNS(null, 'r', 2);
          circle3.setAttributeNS(null, 'style', 'fill: none; stroke: blue; stroke-width: 1px;' );
          container.appendChild(circle3);

          var text1 = document.createElementNS(svgns, 'text');
          text1.setAttributeNS(null,'x',x);
          text1.setAttributeNS(null,'y',y);
          text1.setAttributeNS(null,'font-size','20px');
          text1.setAttributeNS(null,'fill','red');
          var textNode = document.createTextNode(valP);
          text1.appendChild(textNode);
          document.getElementById("myg").appendChild(text1);
          container.appendChild(text1);
        }
      }

      for(var i = 0 ; i < paR1.length; i ++)
      {
        var circle3 = document.createElementNS(svgns, 'circle');
        x1 = paR1[i];
        if (x1) {
          x = x1[0][0];
          y = x1[0][1];
          valP = x1[0][3];

          circle3.setAttributeNS(null, 'cx', x);
          circle3.setAttributeNS(null, 'cy', y);
          circle3.setAttributeNS(null, 'r', 1);
          circle3.setAttributeNS(null, 'style', 'fill: none; stroke: blue; stroke-width: 1px;' );
          container.appendChild(circle3);

          var text1 = document.createElementNS(svgns, 'text');
          text1.setAttributeNS(null,'x',x);
          text1.setAttributeNS(null,'y',y);
          text1.setAttributeNS(null,'font-size','20px');
          text1.setAttributeNS(null,'fill','green');
          var textNode = document.createTextNode(valP);
          text1.appendChild(textNode);
          document.getElementById("myg").appendChild(text1);
          container.appendChild(text1);
        }
      }


      // draw circles for panel Right 2
      for(var i = 0 ; i < paR2.length; i ++)
      {
        var circle3 = document.createElementNS(svgns, 'circle');
        x1 = paR2[i];
        if (x1) {
          x = x1[0][0];
          y = x1[0][1];
          valP = x1[0][3];

          circle3.setAttributeNS(null, 'cx', x);
          circle3.setAttributeNS(null, 'cy', y);
          circle3.setAttributeNS(null, 'r', 2);
          circle3.setAttributeNS(null, 'style', 'fill: none; stroke: blue; stroke-width: 1px;' );
          container.appendChild(circle3);

          var text1 = document.createElementNS(svgns, 'text');
          text1.setAttributeNS(null,'x',x);
          text1.setAttributeNS(null,'y',y);
          text1.setAttributeNS(null,'font-size','20px');
          text1.setAttributeNS(null,'fill','red');
          var textNode = document.createTextNode(valP);
          text1.appendChild(textNode);
          document.getElementById("myg").appendChild(text1);
          container.appendChild(text1);
        }
      }

      var circleCenter = document.createElementNS(svgns,'circle');

    circleCenter.setAttributeNS(null, 'cx', pCenterX);
    circleCenter.setAttributeNS(null, 'cy', pCenterY);
    circleCenter.setAttributeNS(null, 'r', 20);
    circleCenter.setAttributeNS(null, 'style', 'fill: none; stroke: red; stroke-width: 1px;' );
    container.appendChild(circleCenter);


    var text1 = document.createElementNS(svgns, 'text');
    text1.setAttributeNS(null,'x',pCenterX);
    text1.setAttributeNS(null,'y',pCenterY);
    text1.setAttributeNS(null,'font-size','26px');
    text1.setAttributeNS(null,'fill','black');
    var textNode = document.createTextNode('doc1');
    text1.appendChild(textNode);
    document.getElementById("myg").appendChild(text1);
    container.appendChild(text1);

          // var newLine = document.createElementNS(svgns,'line');
          // newLine.setAttribute('id','line2');
          // newLine.setAttribute('x1','0');
          // newLine.setAttribute('y1','0');
          // newLine.setAttribute('x2','300');
          // newLine.setAttribute('y2','200');
          // newLine.setAttribute("stroke", "black")
          // container.appendChild(newLine);

          // var line = document.createElementNS(svgns, 'line');
          // line.setAttribute( 'x1',  '10');
          // line.setAttribute( 'y1',  '10');
          // line.setAttribute( 'x2', '290');
          // line.setAttribute( 'y2', '490');
          // line.setAttribute("stroke", "red")
          //   container.appendChild(line);


        // document.getElementById("cont").appendChild(line);

    for(var n = 0 ; n < paL1.length; n ++)
      {
          if (paL1[n])
          {
          tempPt = paL1[n];
          k = tempPt[0][0];
          var line = document.createElementNS(svgns, 'line');
          line.setAttribute( 'x1',  k.toString());
          line.setAttribute( 'y1',   tempPt[0][1]);
          line.setAttribute( 'x2',  tempPt[0][4]);
          line.setAttribute( 'y2',  tempPt[0][5]);
          line.setAttribute("stroke", "red")

          container.appendChild(line);


          }
          }


    for(var n = 0 ; n < paL2.length; n ++)
      {
          if (paL2[n])
          {
          tempPt = paL2[n];
          k = tempPt[0][0];
          var line = document.createElementNS(svgns, 'line');
          line.setAttribute( 'x1',  k.toString());
          line.setAttribute( 'y1',   tempPt[0][1]);
          line.setAttribute( 'x2',  tempPt[0][4]);
          line.setAttribute( 'y2',  tempPt[0][5]);
          line.setAttribute("stroke", "red")

          container.appendChild(line);
          }
          }


    for(var n = 0 ; n < paR1.length; n ++)
      {
          if (paR1[n])
          {
          tempPt = paR1[n];
          k = tempPt[0][0];
          var line = document.createElementNS(svgns, 'line');
          line.setAttribute( 'x1',  k.toString());
          line.setAttribute( 'y1',   tempPt[0][1]);
          line.setAttribute( 'x2',  tempPt[0][4]);
          line.setAttribute( 'y2',  tempPt[0][5]);
          line.setAttribute("stroke", "red")

          container.appendChild(line);


          }
          }


    for(var n = 0 ; n < paR2.length; n ++)
      {
          if (paR2[n])
          {
          tempPt = paR2[n];
          k = tempPt[0][0];
          var line = document.createElementNS(svgns, 'line');
          line.setAttribute( 'x1',  k.toString());
          line.setAttribute( 'y1',   tempPt[0][1]);
          line.setAttribute( 'x2',  tempPt[0][4]);
          line.setAttribute( 'y2',  tempPt[0][5]);
          line.setAttribute("stroke", "red")

          container.appendChild(line);
          }
          }



    // draw circles
    // document.getElementById("demo").innerHTML = cars;
    var x1 = new Array ();
    var svgns = "http://www.w3.org/2000/svg",
    container = document.getElementById( 'secondsvg' );
    for(var i = 1 ; i < superArray.length; i ++)
    {
        var circle = document.createElementNS(svgns, 'circle');
        if (superArray[i])
        {
        x1 = superArray[i][0];

        if (x1) {
        x = x1[1];
        y = x1[2];
        side = x1[7];
        if (side == 'L') {
        valP = x1[3];
        } else {
        valP = x1[4];
        }
        var tmpPt = new Array ();
        tmpPt[0] = x;
        tmpPt[1] = y;
        if (x === undefined) {
        h = 'v';
        }
        // 9/9
        // small circles
        circle.setAttributeNS(null, 'cx', x);
        circle.setAttributeNS(null, 'cy', y);
        circle.setAttributeNS(null, 'r', 2);  // 5 was original
        circle.setAttributeNS(null, 'style', 'fill: blue; stroke: blue; stroke-width: 1px;' );
        container.appendChild(circle);


        var text1 = document.createElementNS(svgns, 'text');
        var n = 0;
        if (valP) {
        n = valP.length;
        n = (n/2) * 10;
        }
        text1.setAttributeNS(null,'x',x - n);
        text1.setAttributeNS(null,'y',y + 20);
        text1.setAttributeNS(null,'font-size','10px');  // 20px was original
        text1.setAttributeNS(null,'fill','black');
        var textNode = document.createTextNode(valP);
        text1.appendChild(textNode);
        document.getElementById("myg").appendChild(text1);
        container.appendChild(text1);

        }
        }
        }

    // Draw Center Circle
    var circleCenter = document.createElementNS(svgns,'circle');

    circleCenter.setAttributeNS(null, 'cx', pCenterX);
    circleCenter.setAttributeNS(null, 'cy', pCenterY);
    circleCenter.setAttributeNS(null, 'r', 10);
    circleCenter.setAttributeNS(null, 'style', 'fill: blue; stroke: blue; stroke-width: 1px;' );
    container.appendChild(circleCenter);

    // Draw Label
    var text1 = document.createElementNS(svgns, 'text');
    text1.setAttributeNS(null,'x',pCenterX - 40);
    text1.setAttributeNS(null,'y',pCenterY + 40);
    text1.setAttributeNS(null,'font-size','26px');
    text1.setAttributeNS(null,'fill','blue');
    var textNode = document.createTextNode(centerText);
    text1.appendChild(textNode);
    document.getElementById("myg").appendChild(text1);
    container.appendChild(text1);
      // draw lines
      for(var n = 0 ; n < superArray.length; n ++)
        {
            if (superArray[n])
            {
            tempPt = superArray[n];
            k = tempPt[0][1];
            var line = document.createElementNS(svgns, 'line');
            line.setAttribute( 'x1',  k.toString());
            line.setAttribute( 'y1',   tempPt[0][2]);
            line.setAttribute( 'docnames',   tempPt[0][4]);
            line.setAttribute( 'x2',  tempPt[0][5]);
            line.setAttribute( 'y2',  tempPt[0][6]);
            line.setAttribute("stroke", "red");

            // line.onclick = test(tempPt[0][2]);
            line.onclick = test;

            container.appendChild(line);


            }
      }

}


    function test(e) {
         // alert('here');
          p = document.getElementById("info");
          names = e.currentTarget;
          a = names.attributes;
          dc = a['docnames']
           p.innerText =dc.nodeValue;
    }

    function getNode(n, v) {
      n = document.createElementNS("http://www.w3.org/2000/svg", n);
      for (var p in v)
        n.setAttributeNS(null, p.replace(/[A-Z]/g, function(m, p, o, s) { return "-" + m.toLowerCase(); }), v[p]);
      return n
    }


