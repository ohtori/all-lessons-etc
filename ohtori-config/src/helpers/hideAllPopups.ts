export default function hideAllPopups(e) {
  !e.target.closest('.popup') && popupMenudispatch({ type: 'HIDE_ALL' });
}