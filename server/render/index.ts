export default () => {
  if (process.env.NODE_ENV === 'development') {
    return require('./hmr').default
  } else {
    return require('./render').default;
  }
}
