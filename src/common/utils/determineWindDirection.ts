export function determineWindDirection(degrees: number) {
  switch (true) {
    case degrees >= 337.5 || degrees < 22.5:
      return 'северный'
    case degrees >= 22.5 && degrees < 67.5:
      return 'северо-восточный'
    case degrees >= 67.5 && degrees < 112.5:
      return 'восточный'
    case degrees >= 112.5 && degrees < 157.5:
      return 'юго-восточный'
    case degrees >= 157.5 && degrees < 202.5:
      return 'южный'
    case degrees >= 202.5 && degrees < 247.5:
      return 'юго-западный'
    case degrees >= 247.5 && degrees < 292.5:
      return 'западный'
    case degrees >= 292.5 && degrees < 337.5:
      return 'северо-западный'
    default:
      return ''
  }
}
