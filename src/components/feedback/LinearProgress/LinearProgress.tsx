import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import {
  ComponentContainer,
  LinearProgressContainer,
  LinearProgress as MuiLinearProgress,
  Label
} from './LinearProgressStyles'
import { isNil } from 'ramda'
import { LinearProgressProps } from './types'

/**
 * Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.
 */
const LinearProgress: React.FC<LinearProgressProps> = ({
  color = 'grey',
  variant,
  value,
  valueBuffer,
  showLabel,
  labelProps,
  global,
  ...rest
}) => {
  const hasLabel = useMemo(() => !global && showLabel && !isNil(value), [global, showLabel, value])

  return (
    <ComponentContainer global={global}>
      <LinearProgressContainer hasLabel={hasLabel}>
        <MuiLinearProgress value={value} valueBuffer={valueBuffer} variant={variant} color={color} {...rest} />
      </LinearProgressContainer>
      {hasLabel && (
        <Box sx={{ minWidth: 35 }}>
          <Label color="textSecondary" variant="body2" {...labelProps}>{`${Math.round(value)}%`}</Label>
        </Box>
      )}
    </ComponentContainer>
  )
}

LinearProgress.propTypes = {
  /**
   * @default 'grey'
   * Color of the component.
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'warning', 'error', 'success', 'info', 'rose', 'grey']),
  /**
   * If true it shows the progress indicator value (%).
   */
  showLabel: PropTypes.bool,
  /**
   * If true, the bar is shown at the top of the page, spanning the entire width
   */
  global: PropTypes.bool,
  /**
   * Props applied to the label.
   */
  labelProps: PropTypes.object,
  /**
   * Variant to use. Use indeterminate or query when there is no progress value.
   */
  variant: PropTypes.oneOf(['determinate', 'indeterminate', 'buffer', 'query']),
  /**
   * Value of the progress indicator for the determinate and buffer variants. Value between 0 and 100.
   */
  value: PropTypes.number,
  /**
   * Value for the buffer variant. Value between 0 and 100.
   */
  valueBuffer: PropTypes.number
}

export default LinearProgress
