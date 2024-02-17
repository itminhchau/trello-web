import DashboardIcon from '@mui/icons-material/Dashboard'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import myAvatar from '~/assets/avatar.jpg'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '~/utils/formatter'

const MENU_STYLE = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    backgroundColor: 'primary.50'
  }
}

function BoardBar({ board }) {
  return (
    <Box
      px={2}
      sx={{
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto',
        overflowY: 'hidden',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip icon={<DashboardIcon />} label={board?.title} variant="outlined" clickable sx={MENU_STYLE} />
        <Chip
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board?.type)}
          variant="outlined"
          clickable
          sx={MENU_STYLE}
        />
        <Chip icon={<AddToDriveIcon />} label="Add to Google Drive" variant="outlined" clickable sx={MENU_STYLE} />
        <Chip icon={<BoltIcon />} label="Automation" variant="outlined" clickable sx={MENU_STYLE} />
        <Chip icon={<FilterListIcon />} label="Filters" variant="outlined" clickable sx={MENU_STYLE} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={6}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0be' }
            }
          }}
        >
          <Tooltip title="minhchauIt">
            <Avatar alt="Remy Sharp" src={myAvatar} />
          </Tooltip>

          <Tooltip title="minhchauIt">
            <Avatar alt="Remy Sharp" src="https://i1.taimienphi.vn/tmp/cf/aut/hinh-anh-nguoi-mau.jpg" />
          </Tooltip>

          <Tooltip title="minhchauIt">
            <Avatar
              alt="Remy Sharp"
              src="https://thuthuatnhanh.com/wp-content/uploads/2022/12/hinh-anh-nguoi-dep-1.jpg"
            />
          </Tooltip>

          <Tooltip title="minhchauIt">
            <Avatar alt="Remy Sharp" src="https://nld.mediacdn.vn/2016/phan-anh-2-1476760086762.jpg" />
          </Tooltip>

          <Tooltip title="minhchauIt">
            <Avatar alt="Remy Sharp" src="https://vapa.vn/wp-content/uploads/2022/12/anh-mau-dep-001.jpg" />
          </Tooltip>

          <Tooltip title="minhchauIt">
            <Avatar alt="Remy Sharp" src="https://vapa.vn/wp-content/uploads/2022/12/anh-nguoi-dep.jpeg" />
          </Tooltip>

          <Tooltip title="minhchauIt">
            <Avatar alt="Remy Sharp" src="https://timbaby.net/wp-content/uploads/2022/11/anh-trai-dep-18.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
