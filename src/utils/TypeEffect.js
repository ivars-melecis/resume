function TypeText(opts, callback) {
  if (!(this instanceof TypeText)) return new TypeText(opts, callback);

  const props = Array.isArray(opts) ? { target: opts[0], text: opts[1] } : opts || {};

  this.speed = props.speed || 200;
  this.text = props.text || 'Hello World';
  this.textArr = this.text.split('');
  this.target = document.querySelector(props.target);
  this.cursorClass = props.cursorClass || 'type-cursor';
  this.currChar = 0;
  this.currDisplay = '';
  this.showCursor = 'showCursor' in props ? props.showCursor : true;
  this.autoRun = 'autoRun' in props ? props.autoRun : true;
  this.callback = callback || null;
  this.typeDelay = props.typeDelay || 0;
  if (this.autoRun === true) setTimeout(TypeText.prototype.type.bind(this), this.typeDelay);
}

TypeText.prototype.getCursor = function() {
  const cursor = document.createElement('span');
  cursor.classList.add(this.cursorClass);
  return cursor;
};

TypeText.prototype.exeCallback = function() {
  if (this.callback) {
    const callbackPayload = {
      target: this.target,
      text: this.text,
      speed: this.speed,
      hasCursor: this.showCursor
    };
    if (this.showCursor === true) callbackPayload.cursorClass = this.cursorClass;
    this.callback(callbackPayload);
  }
  return this;
};

TypeText.prototype.type = function() {
  if (!this.target) throw new Error(' "target" property is not provided or "target" does not exist in the DOM.');

  if (this.currChar >= this.textArr.length) {
    this.exeCallback();
    return;
  }

  let cursor = this.getCursor();
  this.currDisplay += this.textArr[this.currChar];
  this.target.innerHTML = this.currDisplay;
  if (this.showCursor === true) this.target.appendChild(cursor);
  this.currChar++;
  setTimeout(TypeText.prototype.type.bind(this), this.speed);
};

module.exports = TypeText;
