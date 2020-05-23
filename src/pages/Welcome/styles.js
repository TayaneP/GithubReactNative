import { StyleSheet } from 'react-native'
import { colors, metrics } from '../../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: metrics.basePadding * 2,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  title: {
    textAlign: 'center',
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 17
  },
  text: {
    textAlign: 'center',
    marginTop: metrics.baseMargin,
    fontSize: 15,
    color: colors.light,
    lineHeight: 21,
  },
  error: {
    color: colors.danger,
    textAlign: 'center',
    marginTop: metrics.baseMargin
  },
  form: {
    marginTop: metrics.baseMargin * 2,
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 44,
    paddingHorizontal: metrics.basePadding,
  },
  button: {
    backgroundColor: colors.secundary,
    borderRadius: metrics.baseRadius,
    height: 44,
    marginTop: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16
  }

})

export default styles