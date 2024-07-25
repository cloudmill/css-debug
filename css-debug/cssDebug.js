import './style.scss';

/**
 * в data-css-debug указываем название класса, который будет добавляться если checked
 *
 *
 * one-child - для одного элемента, отображает лишние обертки вокруг элемента
 *
 * border-all - бордер вокруг каждого элемента, помогает в ситуациях, когда пытаемся определить какой элемент выходит за рамки
 *
 * inline - указывает на элемент, у которого есть inline стили,нужно для того, чтобы отловить ошибки, когда стили записаны инлайном, а не в классах
 */
export const cssDebug = () => {
  const body = document.querySelector('body');
  const debugElement = `
    <div class="css-debug">
      <h1>Debug Mode</h1>
      <div class="box">
        <label>
          <input type="checkbox" name="name" data-css-debug="one-child">
          <p>one-child</p>
        </label>

        <label>
          <input type="checkbox" name="name" data-css-debug="border-all">
          <p>Бордер на все</p>
        </label>

        <label>
          <input type="checkbox" name="name" data-css-debug="inline">
          <p>inline style</p>
        </label>
  
      </div>
    </div>
  `;

  // <label>
  //   <input type="checkbox" name="name" data-css-debug="gylis">
  //   <p>Вложенность</p>
  // </label>

  body.insertAdjacentHTML('beforeend', debugElement);

  const checkboxes = document.querySelectorAll('[data-css-debug]');
  checkboxes.forEach((item) => {
    item.addEventListener('change', (e) => {
      // Снимаем выделение с других чекбоксов и удаляем классы
      checkboxes.forEach((checkbox) => {
        if (checkbox !== e.target) {
          checkbox.checked = false;
          body.classList.remove(`css-debug-${checkbox.getAttribute('data-css-debug')}`);
        }
      });

      const debugClass = `css-debug-${e.target.getAttribute('data-css-debug')}`;

      if (e.target.checked) {
        body.classList.add(debugClass);
      } else {
        body.classList.remove(debugClass);
      }
    });
  });
};
