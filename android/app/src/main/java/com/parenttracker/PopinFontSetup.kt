package com.parenttracker

import android.content.Context
import android.graphics.Typeface
import android.util.Log
import java.lang.reflect.Field

class PopinFontSetup {

    fun applyFont(context: Context) {
        try {
            // ✅ Step 1: apna Poppins-Regular font load karo
            // context.assets → assets folder ko access karta hai
            val poppinsRegular: Typeface =
                Typeface.createFromAsset(context.assets, "fonts/Poppins-Regular.ttf")

            // ✅ Step 2: Typeface class me ek private static field "sDefaults" hota hai
            // jisme Android ke system fonts (Roboto etc.) store hote hain
            val defaultFontField: Field = Typeface::class.java.getDeclaredField("sDefaults")
            defaultFontField.isAccessible = true

            // ✅ Step 3: ek naya array banake hum sab jagah Poppins assign kar rahe hain
            val newDefaults = arrayOf(
                poppinsRegular, poppinsRegular, poppinsRegular, poppinsRegular,
                poppinsRegular, poppinsRegular, poppinsRegular, poppinsRegular
            )

            // ✅ Step 4: replace kar do existing system defaults se
            defaultFontField.set(null, newDefaults)

            Log.i("FontOverride", "✅ Default font set to Poppins successfully!")

        } catch (e: Exception) {
            Log.e("FontOverride", "❌ Error setting default font", e)
        }
    }
}
