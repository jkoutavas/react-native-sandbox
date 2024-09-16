package com.sandbox;

import android.os.Build;
import android.provider.Settings;
import android.content.Context;
import java.util.TimeZone;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

public class RNTimeZoneModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public RNTimeZoneModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "RNTimeZoneModule";
    }

    @ReactMethod
    public void getTimeZone(Promise promise) {
        try {
            TimeZone tz = TimeZone.getDefault();
            String timeZoneName = tz.getID(); // Get the IANA timezone name like "America/New_York"
            promise.resolve(timeZoneName);
        } catch (Exception e) {
            promise.reject("timezone_error", "Could not retrieve timezone");
        }
    }
}
