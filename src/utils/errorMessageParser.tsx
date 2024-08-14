export default function (erroCode: any) {
  switch (erroCode) {
    case 'auth/email-already-exists':
      return 'Sağlanan e-posta adresi mevcut bir kullanıcı tarafından kullanılıyor';

    case 'auth/user-not-found':
      return 'Sağlanan tanımlayıcıya karşılık gelen mevcut bir kullanıcı kaydı yok.';

    case 'auth/invalid-email':
      return 'email kullanıcı özelliği için sağlanan değer geçersiz';
    case 'auth/invalid-credential':
      return 'Şifre hatalı';

    case 'auth/weak-password':
      return 'en az 6 haneli şifre olmalı';

    default:
      return erroCode;
      break;
  }
}
