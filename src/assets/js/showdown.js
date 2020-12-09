import showdown from 'showdown'

function show(html) {
  let converter = new showdown.Converter();
  return converter.makeHtml(html);
}

export default show