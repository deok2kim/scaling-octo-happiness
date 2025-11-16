export const translations = {
  ko: {
    dapp_favorite_title: "즐겨찾기",
    dapp_favorite_delete: "삭제",
    dapp_favorite_delete_confirm: "이 사이트를 즐겨찾기 목록에서 삭제 하시겠습니까?",
    dapp_list_title: "목록",
    go_to_dapp: "서비스 바로가기",
    button_cancel: "취소",
    button_confirm: "확인",
  },
  en: {
    dapp_favorite_title: "Favorites",
    dapp_favorite_delete: "Delete",
    dapp_favorite_delete_confirm: "Are you sure you want to delete this site from your favorites?",
    dapp_list_title: "List",
    go_to_dapp: "Go",
    button_cancel: "Cancel",
    button_confirm: "Confirm",
  },
};

export type TranslationKey = keyof typeof translations.ko;

