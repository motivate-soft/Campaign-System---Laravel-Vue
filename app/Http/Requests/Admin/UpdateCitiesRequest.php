<?php

namespace App\Http\Requests\Admin;

use App\City;
use Illuminate\Foundation\Http\FormRequest;

class UpdateCitiesRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return City::updateValidation($this);
    }
}