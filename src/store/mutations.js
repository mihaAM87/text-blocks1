export default {
  followCursor(context, data) {
    const elemTarget =
      context.document.querySelector('.bacgroundImageDiv').style;

    const elemParent = context.document.querySelector('#mainElement').style;

    // elemParent.addEventListener('mousemove', function (event) {
    //   const event1 = event;
    // });
    elemTarget.left = (elemParent.x - elemParent.width / 2) * 0.1 + 'px'; // задаём элементу позиционирование слева
    elemTarget.top = (elemParent.y - elemParent.width / 2) * 0.1 + 'px'; // задаём элементу позиционирование сверху
  },
};
