export default function (erroCode: Error) {
  switch (erroCode.message) {
    default:
      return erroCode.message;
  }
}
