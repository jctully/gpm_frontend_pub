import { AbilityBuilder } from '@casl/ability'

const ability = AbilityBuilder.define((can, cannot) => {
  can('read', 'all')
  can('manage', 'Post', { author: loggedInUser.id })
  cannot('delete', 'Post', { 'comments.0': { $exists: true } })
})
