export const perPageLogic = (Follower) => {
  const ItemsPerPage = 6
  const Pages = Follower.length / ItemsPerPage
  const newFollower = Array.from({ length: Pages }, (_, index) => {
    const start = index * ItemsPerPage
    return Follower.slice(start, start + ItemsPerPage)
  })
  return newFollower
}
