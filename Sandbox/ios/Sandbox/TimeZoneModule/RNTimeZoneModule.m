#import "RNTimeZoneModule.h"
#import <React/RCTLog.h>

@implementation RNTimeZoneModule

RCT_EXPORT_MODULE();

RCT_REMAP_METHOD(getTimeZone,
                 getTimeZoneWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSString *timeZoneName = [[NSTimeZone localTimeZone] name];
  if (timeZoneName) {
    resolve(timeZoneName);
  } else {
    NSError *error = [NSError errorWithDomain:@"RNTimeZoneError" code:500 userInfo:nil];
    reject(@"no_timezone", @"Could not retrieve timezone", error);
  }
}

@end
