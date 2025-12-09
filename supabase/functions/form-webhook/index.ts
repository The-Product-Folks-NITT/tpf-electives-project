import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const formData = await req.json();
    console.log('Received form data:', formData);

    // Extract form fields (adjust field names to match your Google Form)
    const {
      courseName,
      department,
      teachingMethod,
      examStructure,
      gradingEase,
      leniency,
      gradingComments,
      extraClasses,
      generalComments,
      yearOfStudy,
    } = formData;

    // First, check if course exists or create it
    let { data: existingCourse } = await supabase
      .from('courses')
      .select('id')
      .eq('name', courseName)
      .eq('department', department)
      .maybeSingle();

    let courseId = existingCourse?.id;

    if (!courseId) {
      // Create new course
      const { data: newCourse, error: courseError } = await supabase
        .from('courses')
        .insert({ name: courseName, department })
        .select('id')
        .single();

      if (courseError) {
        console.error('Error creating course:', courseError);
        throw courseError;
      }
      courseId = newCourse.id;
    }

    // Insert the review (using service role to bypass RLS for anonymous submissions)
    const { data: review, error: reviewError } = await supabase
      .from('reviews')
      .insert({
        course_id: courseId,
        user_id: '00000000-0000-0000-0000-000000000000', // Placeholder for anonymous submissions
        teaching_method: teachingMethod || 'Not specified',
        exam_structure: examStructure || 'Not specified',
        grading_ease: parseInt(gradingEase) || 3,
        leniency: leniency || 'Not specified',
        grading_comments: gradingComments || null,
        extra_classes: extraClasses || 'Not specified',
        general_comments: generalComments || null,
        year_of_study: yearOfStudy || 'Not specified',
      })
      .select()
      .single();

    if (reviewError) {
      console.error('Error inserting review:', reviewError);
      throw reviewError;
    }

    console.log('Review inserted successfully:', review);

    return new Response(JSON.stringify({ success: true, review }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in form-webhook:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
