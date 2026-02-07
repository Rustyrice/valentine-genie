export async function saveWishesToDB({ wish1, wish2, wish3 }) {
  if (!wish1 || !wish2 || !wish3) {
    throw new Error('Invalid wishes data')
  }

  return addDoc(collection(db, 'valentine_wishes'), {
    wish1,
    wish2,
    wish3,
    createdAt: new Date(),
  })
}
